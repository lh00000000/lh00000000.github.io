#!/bin/bash

# Next.js project build script
# This script builds the project from the dev/ directory

set -e

echo "Building Next.js project from dev/ directory..."

# Change to dev directory
cd dev

# Install dependencies
npm ci

# Build the project
npm run build

# Export static files if configured
if grep -q "export" package.json; then
  echo "Exporting static files..."
  npm run export
fi

# Go back to parent directory
cd ..

echo "Next.js project build complete!" 