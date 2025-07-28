#!/bin/bash

# Vite project build script
# This script builds the project from the dev/ directory and places assets in the parent directory

set -e

echo "Building Vite project from dev/ directory..."

# Change to dev directory
cd dev

# Install dependencies
npm ci

# Build the project
npm run build

# Go back to parent directory
cd ..

# Update the root index.html to use built assets
if [ -f "dev/dist/index.html" ] && [ -f "index.html" ]; then
  echo "Updating index.html with built asset paths..."
  
  # Extract the built asset paths from dev/dist/index.html
  JS_FILE=$(grep -o 'src="[^"]*\.js"' dev/dist/index.html | head -1 | sed 's/src="//' | sed 's/"//')
  CSS_FILE=$(grep -o 'href="[^"]*\.css"' dev/dist/index.html | head -1 | sed 's/href="//' | sed 's/"//')
  
  if [ ! -z "$JS_FILE" ] && [ ! -z "$CSS_FILE" ]; then
    echo "Found assets: JS=$JS_FILE, CSS=$CSS_FILE"
    
    # Create a new index.html with the correct asset paths
    cat > index.html << EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Blog Post Title</title>
    <link rel="stylesheet" crossorigin href="./dev/dist/${CSS_FILE#./}">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" crossorigin src="./dev/dist/${JS_FILE#./}"></script>
  </body>
</html>
EOF
    
    echo "Successfully updated index.html"
  else
    echo "Warning: Could not extract asset paths from dev/dist/index.html"
  fi
else
  echo "Warning: dev/dist/index.html or index.html not found"
fi

echo "Vite project build complete!" 