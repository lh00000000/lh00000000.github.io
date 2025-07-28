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
if [ -f "dev/dist/index.html" ] && [ -f "index.template.html" ]; then
  echo "Updating index.html with built asset paths using template..."
  
  # Extract the built asset paths from dev/dist/index.html
  JS_FILE=$(grep -o 'src="[^"]*\.js"' dev/dist/index.html | head -1 | sed 's/src="//' | sed 's/"//')
  CSS_FILE=$(grep -o 'href="[^"]*\.css"' dev/dist/index.html | head -1 | sed 's/href="//' | sed 's/"//')
  
  if [ ! -z "$JS_FILE" ] && [ ! -z "$CSS_FILE" ]; then
    echo "Found assets: JS=$JS_FILE, CSS=$CSS_FILE"
    
    # Create the final asset paths
    JS_PATH="./dev/dist/${JS_FILE#./}"
    CSS_PATH="./dev/dist/${CSS_FILE#./}"
    
    # Use the template to create index.html
    sed "s|{{JS_PATH}}|$JS_PATH|g; s|{{CSS_PATH}}|$CSS_PATH|g" index.template.html > index.html
    
    echo "Successfully created index.html from template"
  else
    echo "Warning: Could not extract asset paths from dev/dist/index.html"
  fi
else
  echo "Warning: dev/dist/index.html or index.template.html not found"
fi

echo "Vite project build complete!" 