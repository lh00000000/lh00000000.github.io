# Blog Publishing System

This blog now uses a file-based publishing system where each blog post directory contains a `PUBLISH00000000.json` file that controls whether the post is published and what tags it has.

## How to Publish a Blog Post

### 1. Create a Blog Post Directory
Create a directory with the naming pattern: `YYYY-MM-DD-postname`

Example: `2024-01-15-my-new-post`

### 2. Add Your Blog Content
Place your blog post files (HTML, CSS, JS, etc.) in the directory.

### 3. Create a PUBLISH00000000.json File
Create a `PUBLISH00000000.json` file in your blog post directory with the following structure:

```json
{
  "tags": "#tag1 #tag2 #tag3"
}
```

**For local posts:**
```json
{
  "tags": "#event #personal"
}
```

**For redirect posts (posts that link to external sites):**
```json
{
  "tags": "exp textile",
  "redirect": "https://external-site.com/post-url"
}
```

### 4. Commit and Push
The GitHub Actions workflow will automatically:
- Scan for all `PUBLISH00000000.json` files
- Run any `BUILD00000000.sh` scripts in blog post directories
- Generate static JSON files
- Build the complete site
- Deploy to GitHub Pages

Just commit and push your changes:

```bash
git add .
git commit -m "Add new blog post: 2024-01-15-my-new-post"
git push origin main
```

The build process will automatically detect your new post and include it in the blog.

## PUBLISH00000000.json Format

### Required Fields
- `tags`: Space-delimited string of tags (e.g., "#event #personal #itp")

### Optional Fields
- `redirect`: URL to redirect to (for external posts)

## BUILD00000000.sh Scripts

You can also include a `BUILD00000000.sh` script in your blog post directory. This script will be executed during the GitHub Actions build process and can be used to:

- Compile assets (CSS, JS, etc.)
- Generate static files
- Run any build steps specific to that post
- Process images or other media

Example `BUILD00000000.sh`:
```bash
#!/bin/bash
# Build script for this blog post

# Compile SASS to CSS
sass style.scss style.css

# Minify JavaScript
uglifyjs script.js -o script.min.js

# Copy built files to parent directory
cp style.css ../style.css
cp script.min.js ../script.min.js

echo "Build complete for $(basename $(pwd))"
```

The script will be run from within the blog post directory, and any files it generates will be included in the final build.

### Examples

**Simple local post:**
```json
{
  "tags": "#js #experiment"
}
```

**Post with multiple tags:**
```json
{
  "tags": "#itp #freestore #process #update"
}
```

**Redirect to external site:**
```json
{
  "tags": "textile experiment",
  "redirect": "https://notion.site/my-post"
}
```

## Build Scripts

### Local Development
For local development, you can run the build script manually:

```bash
npm run build
```

This will create a `dist/` directory with the built site.

### GitHub Actions
The main build process runs automatically via GitHub Actions when you push to the `main` branch. The workflow:

1. Scans for all `PUBLISH.json` files
2. Generates static JSON files in `dist/api/`
3. Copies all blog posts and assets to `dist/`
4. Deploys to GitHub Pages

### Migration Scripts

#### `convert-to-publish-json.js`
Converts the old hardcoded posts array to individual `PUBLISH.json` files.

```bash
npm run convert
```

## How It Works

### Build Process (GitHub Actions)
1. GitHub Actions scans for all directories matching `YYYY-MM-DD-*` pattern
2. Reads `PUBLISH00000000.json` files from each directory
3. Runs any `BUILD00000000.sh` scripts found in blog post directories
4. Generates static JSON files in `dist/api/`:
   - `posts.json` - All published posts with tags and redirects
   - `blog-directories.json` - List of all blog directories
   - `tags.json` - All unique tags
   - `blog-data.json` - Combined data with metadata
5. Copies all blog posts and static assets to `dist/`
6. Deploys the `dist/` directory to GitHub Pages

### Runtime (Browser)
1. The blog page loads `api/posts.json` (pre-built, fast)
2. If that fails, falls back to dynamic scanning of `PUBLISH00000000.json` files
3. Displays posts with tags and handles redirects
4. Posts are sorted by date (newest first)

## Benefits

- **No more hardcoded posts**: All post metadata is stored with the post itself
- **Easy publishing**: Just add a `PUBLISH00000000.json` file to publish
- **Easy unpublishing**: Remove or rename the `PUBLISH00000000.json` file to unpublish
- **Supports redirects**: Can link to external sites while maintaining the blog structure
- **Tag management**: Tags are stored with each post, making them easy to manage

## Migration from Old System

If you're migrating from the old hardcoded system:

1. Run the conversion script:
   ```bash
   npm run convert
   ```

2. Test locally:
   ```bash
   npm run build
   npm run dev
   ```

3. Commit and push to trigger the GitHub Actions build:
   ```bash
   git add .
   git commit -m "Migrate to PUBLISH.json system"
   git push origin main
   ```

The old hardcoded `allPosts` array in `blog/script.js` has been replaced with a dynamic loading system that reads `PUBLISH00000000.json` files and uses pre-built static data for better performance. 