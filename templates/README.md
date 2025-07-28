# Project Templates

This directory contains templates for different types of projects that can be used with the blog build system. All templates use a standardized `/dev` subdirectory structure.

## Standard Structure

All templates follow this structure:
```
project-name/
├── .build-config          # Configuration for GitHub Actions
├── build.sh               # Build script
├── index.html            # Production entry point (updated by build script)
└── dev/                  # Development directory
    ├── src/              # Source files
    ├── public/           # Static assets
    ├── package.json      # Dependencies and scripts
    └── [framework-specific files]
```

## Available Templates

### Vite Project
- **Directory**: `vite-project/`
- **Build Tool**: Vite
- **Output**: `dev/dist/` directory
- **Features**: Automatic asset path updates in root `index.html`

### Next.js Project
- **Directory**: `nextjs-project/`
- **Build Tool**: Next.js
- **Output**: `dev/out/` directory (for static export) or `dev/.next/`
- **Features**: Automatic static export if configured

### React Project
- **Directory**: `react-project/`
- **Build Tool**: Create React App
- **Output**: `dev/build/` directory
- **Features**: Standard CRA build process

## Using Templates

To create a new project from a template:

1. **Copy the template**:
   ```bash
   cp -r templates/vite-project 2025-08-01-my-new-post
   cd 2025-08-01-my-new-post
   ```

2. **Initialize the project in the dev directory**:
   ```bash
   cd dev
   
   # For Vite
   npm create vite@latest . -- --template vanilla --yes
   
   # For Next.js
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
   
   # For React
   npx create-react-app . --template typescript
   ```

3. **Make the build script executable**:
   ```bash
   cd ..
   chmod +x build.sh
   ```

4. **Customize the project**:
   - Update the content in `dev/src/`
   - Modify the build script if needed
   - Test locally with `./build.sh`

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new project"
   git push
   ```

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

## Template Structure

Each template contains:
- `.build-config`: Configuration for GitHub Actions
- `build.sh`: Project-specific build script
- `index.html`: Production entry point (updated by build script)
- `dev/`: Directory containing all development files

## Benefits of the /dev Structure

- **Clear Separation**: Development files are separate from production files
- **Standardized Workflow**: All projects follow the same pattern
- **Easy Development**: Just `cd dev && npm run dev`
- **Clean Production**: Root directory only contains what's needed for hosting
- **Flexible**: Can easily add more build tools or frameworks

## Customizing Build Scripts

Each build script can be customized for project-specific needs:

- **Pre-build steps**: Linting, testing, etc.
- **Post-build steps**: Asset optimization, deployment preparation
- **Environment-specific logic**: Different builds for different environments
- **Custom output handling**: Special file processing or copying

The build scripts are designed to be self-contained and handle all aspects of building their respective project types from the `dev/` directory. 