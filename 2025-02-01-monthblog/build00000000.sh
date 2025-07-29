#!/bin/bash

# Vite project build script
# This script builds the project from the dev/ directory and places assets in the parent directory

set -e

echo "Building Vite project from dev/ directory..."

rm -rf dist
rm -rf index.html

# Change to dev directory
cd dev

# Install dependencies
npm install

# Build the project
npm run build

cp -r dist/* ../

# Go back to parent directory
cd ..

# Generate index.template.html from dev/index.html if it exists
if [ -f "dev/index.html" ]; then
  echo "Generating index.template.html from dev/index.html..."
  
  # Create template by replacing script and link tags with placeholders
  sed 's|<script type="module" src="/src/main.tsx"></script>|<script type="module" crossorigin src="{{JS_PATH}}"></script>|g; s|<link rel="icon" type="image/svg+xml" href="/vite.svg" />|<link rel="icon" type="image/svg+xml" href="./vite.svg" />|g' dev/index.html > index.template.html
  
  # Add CSS placeholder if it doesn't exist
  if ! grep -q "{{CSS_PATH}}" index.template.html; then
    # Insert CSS placeholder after the title tag, preserving the title content
    sed -i '' 's|\(<title>.*</title>\)|\1\n    <link rel="stylesheet" crossorigin href="{{CSS_PATH}}">|' index.template.html
  fi
  
  echo "Successfully generated index.template.html"
fi

# Update the root index.html to use built assets
if [ -f "index.template.html" ]; then
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
    
    echo "Successfully created index.html from template"
  else
    echo "Warning: Could not extract asset paths from index.html"
  fi
else
  echo "Warning: index.template.html not found"
fi

echo "Vite project build complete!" 