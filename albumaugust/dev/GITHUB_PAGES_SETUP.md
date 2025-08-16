# GitHub Pages Setup (No Environment Variables)

This guide shows how to deploy your app with Cloudinary integration to GitHub Pages without any environment variables.

## Quick Setup

### 1. Get Your Cloudinary Cloud Name
1. Go to [cloudinary.com](https://cloudinary.com) and sign up
2. Find your **Cloud Name** in the top-right corner of your dashboard
3. It looks like: `abc123` or `mycompany`

### 2. Update Configuration
Edit `src/config/cloudinary.ts`:
```typescript
export const cloudinaryConfig = {
  cloudName: 'abc123', // ← Replace with your actual cloud name
};
```

### 3. Test Locally
```bash
npm run dev
```

### 4. Build and Deploy
```bash
npm run build
```

The `dist/` folder is now ready for GitHub Pages!

## GitHub Pages Deployment

### Option 1: GitHub Actions (Recommended)
1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 2: Manual Deployment
1. **Build locally:**
   ```bash
   npm run build
   ```
2. **Create gh-pages branch:**
   ```bash
   git checkout -b gh-pages
   ```
3. **Copy dist contents:**
   ```bash
   rm -rf *
   cp -r dist/* .
   ```
4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

### Option 3: Deploy from main branch
1. Go to your repository **Settings > Pages**
2. Set **Source** to "Deploy from a branch"
3. Choose **main** branch and **/docs** folder
4. Copy your `dist/` folder contents to a `docs/` folder in your main branch

## Testing

### Before Deploying
1. **Test locally:**
   ```bash
   npm run dev
   ```
2. **Test build:**
   ```bash
   npm run build
   npm run preview
   ```

### After Deploying
1. Check your GitHub Pages URL
2. Verify images load through Cloudinary
3. Check browser console for errors

## Troubleshooting

### Images Not Loading
- Verify your Cloudinary cloud name is correct
- Check that S3 URLs are accessible
- Ensure S3 bucket allows public access

### Build Errors
- Make sure all imports are correct
- Check that Cloudinary cloud name is set
- Verify no syntax errors in TypeScript files

### GitHub Pages Not Updating
- Wait a few minutes for changes to propagate
- Check GitHub Actions logs if using automation
- Verify the correct branch/folder is being deployed

## Example Configuration

### For Testing (No Account Required)
```typescript
export const cloudinaryConfig = {
  cloudName: 'demo', // Uses Cloudinary's public demo account
};
```

### For Production
```typescript
export const cloudinaryConfig = {
  cloudName: 'mycompany', // Your actual cloud name
};
```

## Benefits of This Approach

✅ **No environment variables needed**
✅ **Works immediately with GitHub Pages**
✅ **No build configuration required**
✅ **Easy to test and deploy**
✅ **Safe to commit to git**

## Next Steps

1. **Get your Cloudinary cloud name**
2. **Update the configuration file**
3. **Test locally with `npm run dev`**
4. **Build with `npm run build`**
5. **Deploy the `dist/` folder to GitHub Pages**

That's it! Your app will now serve S3 images through Cloudinary's CDN without any environment variable setup.
