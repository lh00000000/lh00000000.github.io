#!/bin/bash

# React project build script
# This script builds the project from the dev/ directory

set -e

echo "Building React project from dev/ directory..."

# Change to dev directory
cd dev

# Install dependencies
npm ci

# Build the project
npm run build

# Go back to parent directory
cd ..

echo "React project build complete!" 