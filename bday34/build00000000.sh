#!/bin/bash

# Vite project build script
# This script builds the project from the dev/ directory and places assets in the parent directory

set -e

# Always run from this script's directory
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "Building Vite project from dev/ directory..."

# Only clean build artifacts inside dev/, never remove existing outputs in the root until we have a successful build
rm -rf dev/dist

# Change to dev directory
cd dev

# Install dependencies
npm install

# Build the project
npm run build

# After a successful build, copy built files to parent
cp -r dist/* ../

# Go back to parent directory
cd ..

# Generate index.template.html from dev/index.html if it exists
if [ -f "dev/index.html" ]; then
  echo "Generating index.template.html from dev/index.html..."
  
  # Create template by replacing script and link tags with placeholders
  sed 's|<script type="module" src="/src/main.tsx"></script>|<script type="module" crossorigin src="{{JS_PATH}}"></script>|g; s|<link rel="icon" type="image/svg+xml" href="/vite.svg" />|<link rel="icon" type="image/svg+xml" href="./vite.svg" />|g' dev/index.html > index.template.html
  
  # Ensure CSS placeholder exists
  if ! grep -q "{{CSS_PATH}}" index.template.html; then
    # Insert CSS placeholder after the title tag, preserving the title content
    sed -i 's|\(<title>.*</title>\)|\1\n    <link rel="stylesheet" crossorigin href="{{CSS_PATH}}">|' index.template.html
  fi

  # Ensure PWA manifest and theme-color are present in the template
  if ! grep -q '<link rel="manifest"' index.template.html; then
    awk '1; /<meta name="viewport"/ {print "    <link rel=\"manifest\" href=\"./manifest.webmanifest\" />\n    <meta name=\"theme-color\" content=\"#111111\" />"; }' index.template.html > index.template.html.tmp && mv index.template.html.tmp index.template.html
  fi

  # Ensure service worker registration is present before </body>
  if ! grep -q "navigator.serviceWorker.register('./sw.js')" index.template.html; then
    sed -i '/<\/body>/ i \
    <script>\
      if ("serviceWorker" in navigator) {\
        window.addEventListener("load", function() {\
          navigator.serviceWorker.register("./sw.js").catch(function(err){\
            console.warn("SW registration failed:", err);\
          });\
        });\
      }\
    <\/script>' index.template.html
  fi
  
  echo "Successfully generated index.template.html"
fi

# Update the root index.html to use built assets
if [ -f "index.template.html" ] && [ -f "index.html" ]; then
  echo "Updating index.html with built asset paths using template..."
  
  # Extract the built asset paths from the copied index.html (now in parent directory)
  JS_FILE=$(grep -o 'src="[^"]*\.js"' index.html | head -1 | sed 's/src="//' | sed 's/"//')
  CSS_FILE=$(grep -o 'href="[^"]*\.css"' index.html | head -1 | sed 's/href="//' | sed 's/"//')
  
  if [ ! -z "$JS_FILE" ] && [ ! -z "$CSS_FILE" ]; then
    echo "Found assets: JS=$JS_FILE, CSS=$CSS_FILE"
    
    # Create the final asset paths
    JS_PATH="./${JS_FILE#./}"
    CSS_PATH="./${CSS_FILE#./}"
    
    # Use the template to create index.html
    sed "s|{{JS_PATH}}|$JS_PATH|g; s|{{CSS_PATH}}|$CSS_PATH|g" index.template.html > index.html

    # Generate service worker from template with asset paths
    if [ -f "sw.template.js" ]; then
      sed "s|__JS_PATH__|$JS_PATH|g; s|__CSS_PATH__|$CSS_PATH|g" sw.template.js > sw.js
      echo "Generated sw.js with precache list"
    fi
    
    echo "Successfully created index.html from template"
  else
    echo "Warning: Could not extract asset paths from index.html"
  fi
else
  echo "Warning: index.template.html or base index.html not found"
fi

echo "Vite project build complete!" 