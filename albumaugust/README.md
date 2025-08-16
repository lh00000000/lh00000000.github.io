# Vite Test Blog Post

This is a test blog post that demonstrates automatic building of Vite projects using GitHub Actions with a standardized `/dev` subdirectory structure and TypeScript support.

## How it works

1. **Development**: All development files are in the `dev/` subdirectory
2. **Build Process**: The `build.sh` script builds from `dev/` and updates the root `index.html`
3. **Production**: The root directory contains the production-ready files
4. **TypeScript**: Full TypeScript support with proper type checking

## Project Structure

```
2025-07-28-vitetest/
├── .build-config          # Configuration for GitHub Actions
├── build.sh               # Build script that builds from dev/ and updates root
├── index.html            # Production entry point (updated by build script)
├── README.md            # This file
└── dev/                  # Development directory
    ├── src/
    │   ├── main.ts       # Main TypeScript file
    │   ├── style.css     # Styles
    │   └── counter.ts    # Counter functionality (TypeScript)
    ├── public/           # Static assets
    ├── dist/             # Built files (generated)
    ├── node_modules/     # Dependencies
    ├── index.html        # Development entry point
    ├── package.json      # Dependencies and scripts
    ├── vite.config.ts    # Vite configuration (TypeScript)
    ├── tsconfig.json     # TypeScript configuration
    ├── tsconfig.node.json # Node.js TypeScript configuration
    └── .gitignore        # Git ignore rules
```

## Development Workflow

### 1. Development
```bash
# Navigate to the dev directory
cd 2025-07-28-vitetest/dev

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

### 2. Building for Production
```bash
# From the project root directory
cd 2025-07-28-vitetest

# Run the build script
./build.sh
```

This will:
- Build the TypeScript project from `dev/` directory
- Update the root `index.html` with correct asset paths
- Make the project ready for static hosting

### 3. Preview Production Build
```bash
# From the project root directory
cd 2025-07-28-vitetest

# Use live-server or any static file server
live-server .
```

## Build Script Details

The `build.sh` script:
1. Changes to the `dev/` directory
2. Installs dependencies with `npm ci`
3. Builds the TypeScript project with `npm run build`
4. Extracts the built asset filenames from `dev/dist/index.html`
5. Creates a new root `index.html` with the correct asset paths pointing to `./dev/dist/`

## TypeScript Features

- **Full TypeScript Support**: All source files are TypeScript
- **Type Safety**: Proper type annotations for DOM elements and functions
- **Strict Mode**: Enabled for better code quality
- **Modern Configuration**: Uses Vite's recommended TypeScript setup

## GitHub Actions Integration

The GitHub Actions workflow automatically:
- Detects the `.build-config` file
- Runs the project's own `build.sh` script
- Commits both the built files in `dev/dist/` and the updated root `index.html`

## Benefits of the /dev Structure

- **Clear Separation**: Development files are separate from production files
- **Standardized Workflow**: All projects follow the same pattern
- **Easy Development**: Just `cd dev && npm run dev`
- **Clean Production**: Root directory only contains what's needed for hosting
- **Flexible**: Can easily add more build tools or frameworks
- **TypeScript Ready**: Full TypeScript support out of the box

## Adding More Projects

To add another project with this structure:

1. Create a new directory: `mkdir 2025-08-01-new-post`
2. Create the dev subdirectory: `mkdir 2025-08-01-new-post/dev`
3. Initialize your project in the dev directory
4. Add `.build-config` and `build.sh` to the root
5. The GitHub Action will automatically detect and build it

## URL Structure

- **Development**: `http://localhost:5173/` (when running `npm run dev` from `dev/`)
- **Production**: `http://127.0.0.1:8080/2025-07-28-vitetest/` (when served from root)

This structure makes it easy to develop locally with TypeScript while maintaining a clean production setup! 