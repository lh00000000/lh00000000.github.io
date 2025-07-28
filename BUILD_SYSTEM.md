# Blog Build System

This repository uses GitHub Actions to automatically build different types of projects when changes are detected. Each project contains its own build script and uses a standardized `/dev` subdirectory structure.

## How it works

The GitHub Actions workflow (`.github/workflows/build-projects.yml`) automatically detects and builds projects based on `.build-config` files in each project directory. Each project contains its own build script that knows how to build itself from the `dev/` subdirectory.

## Standard Project Structure

Each buildable project follows this structure:

```
project-directory/
├── .build-config          # Configuration file
├── build.sh               # Build script
├── index.html            # Production entry point (updated by build script)
└── dev/                  # Development directory
    ├── src/              # Source files
    ├── public/           # Static assets
    ├── package.json      # Dependencies and scripts
    ├── [framework files] # Framework-specific files
    └── dist/             # Built files (generated)
```

## Adding a New Project

### 1. Create the project directory
```bash
mkdir 2025-08-01-my-new-post
cd 2025-08-01-my-new-post
mkdir dev
```

### 2. Initialize your project in the dev directory
```bash
cd dev

# For Vite
npm create vite@latest . -- --template vanilla --yes

# For Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# For React
npx create-react-app . --template typescript
```

### 3. Add the build configuration
Create a `.build-config` file in the project root:
```bash
cd ..
echo "BUILD_TOOL=vite" > .build-config
echo "BUILD_SCRIPT=build.sh" >> .build-config
```

### 4. Create a build script
Each project should have its own build script that knows how to build itself from the `dev/` directory. Here are examples:

#### Vite Build Script (`build.sh`)
```bash
#!/bin/bash
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

# Update the root index.html with built asset paths
if [ -f "dev/dist/index.html" ] && [ -f "index.html" ]; then
  JS_FILE=$(grep -o 'src="[^"]*\.js"' dev/dist/index.html | head -1 | sed 's/src="//' | sed 's/"//')
  CSS_FILE=$(grep -o 'href="[^"]*\.css"' dev/dist/index.html | head -1 | sed 's/href="//' | sed 's/"//')
  
  # Create new index.html with correct asset paths
  cat > index.html << EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Title</title>
    <link rel="stylesheet" crossorigin href="./dev/dist/${CSS_FILE#./}">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" crossorigin src="./dev/dist/${JS_FILE#./}"></script>
  </body>
</html>
EOF
fi

echo "Vite project build complete!"
```

#### Next.js Build Script (`build.sh`)
```bash
#!/bin/bash
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
  npm run export
fi

# Go back to parent directory
cd ..

echo "Next.js project build complete!"
```

#### React Build Script (`build.sh`)
```bash
#!/bin/bash
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
```

### 5. Create a production index.html
Create a simple `index.html` in the project root:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Blog Post Title</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- This will be updated by the build script -->
  </body>
</html>
```

### 6. Make the build script executable
```bash
chmod +x build.sh
```

### 7. Commit and push
```bash
git add .
git commit -m "Add new project"
git push
```

The GitHub Action will automatically detect the new project and build it.

## Development Workflow

### Development
```bash
cd 2025-08-01-my-new-post/dev
npm install
npm run dev
```

### Building for Production
```bash
cd 2025-08-01-my-new-post
./build.sh
```

### Preview Production
```bash
# From the project root
live-server .
```

## GitHub Actions Workflow

The workflow is simple and extensible:

1. **Finds projects**: Looks for `.build-config` files
2. **Reads configuration**: Sources the `.build-config` file to get build details
3. **Runs build script**: Executes the project's own build script
4. **Commits results**: Adds built files and updated files to git

## Benefits of This Approach

- **Modular**: Each project manages its own build logic
- **Extensible**: Easy to add new build tools without changing the main workflow
- **Maintainable**: Build logic is co-located with the project
- **Flexible**: Each project can have custom build steps
- **Simple**: The main workflow is just a coordinator
- **Standardized**: All projects follow the same `/dev` structure
- **Clean Separation**: Development files separate from production files

## Example Project Structure

```
your-blog/
├── .github/
│   └── workflows/
│       └── build-projects.yml
├── 2025-07-28-vitetest/
│   ├── .build-config
│   ├── build.sh
│   ├── index.html
│   └── dev/
│       ├── src/
│       ├── dist/
│       ├── package.json
│       └── vite.config.js
├── 2025-08-01-nextjs-post/
│   ├── .build-config
│   ├── build.sh
│   ├── index.html
│   └── dev/
│       ├── src/
│       ├── out/
│       ├── package.json
│       └── next.config.js
└── 2025-08-15-react-post/
    ├── .build-config
    ├── build.sh
    ├── index.html
    └── dev/
        ├── src/
        ├── build/
        ├── package.json
        └── public/
```

## Using Templates

For quick project creation, use the templates in the `templates/` directory:

```bash
cp -r templates/vite-project 2025-08-01-new-post
cd 2025-08-01-new-post/dev
npm create vite@latest . -- --template vanilla --yes
cd ..
chmod +x build.sh
```

## Troubleshooting

### Build script not found
- Ensure the build script is executable: `chmod +x build.sh`
- Check that the script path in `.build-config` is correct

### Build fails
- Check that the build script has proper error handling (`set -e`)
- Verify all dependencies are in `dev/package.json`
- Test the build script locally first

### Files not being committed
- Ensure the build script creates the expected output directories in `dev/`
- Check that the workflow has write permissions to the repository

### Development workflow
- Always run `npm run dev` from the `dev/` directory
- Always run `./build.sh` from the project root directory 