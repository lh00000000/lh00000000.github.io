# Build and Deployment Guide

This guide explains how to build and deploy your app with Cloudinary integration for serving S3 images.

## Build Process

### 1. Development
During development, use a `.env` file:
```env
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

### 2. Build Command
```bash
npm run build
```

This creates a `dist/` folder with static files ready for deployment.

## Deployment Options

### Option 1: GitHub Pages
1. **Build locally:**
   ```bash
   npm run build
   ```
2. **Push dist folder to gh-pages branch:**
   ```bash
   git add dist
   git commit -m "Build for deployment"
   git subtree push --prefix dist origin gh-pages
   ```

### Option 2: Netlify
1. **Connect your repository**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment variables:**
   - Add `VITE_CLOUDINARY_CLOUD_NAME` in Netlify dashboard

### Option 3: Vercel
1. **Connect your repository**
2. **Build settings:**
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Environment variables:**
   - Add `VITE_CLOUDINARY_CLOUD_NAME` in Vercel dashboard

### Option 4: Static File Server
1. **Build:**
   ```bash
   npm run build
   ```
2. **Copy dist folder to your server**
3. **Serve with nginx, Apache, or any web server**

## Environment Variables in Production

### Why Only Cloud Name?
- **Cloud Name is public**: Safe to expose in client-side code
- **No API secrets**: API keys are only needed for uploading, not serving
- **Build-time embedding**: Vite embeds env vars at build time

### Setting Environment Variables

#### GitHub Actions
```yaml
- name: Build
  env:
    VITE_CLOUDINARY_CLOUD_NAME: ${{ secrets.CLOUDINARY_CLOUD_NAME }}
  run: npm run build
```

#### Netlify/Vercel
Set in the platform's environment variables section:
```
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

#### Manual Build
```bash
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name npm run build
```

## Testing Before Deployment

### 1. Use Demo Account
Set `VITE_CLOUDINARY_CLOUD_NAME=demo` in your `.env` file for testing.

### 2. Test Locally
```bash
npm run dev
```
The `DemoImage` component shows how Cloudinary integration works.

### 3. Test Build
```bash
npm run build
npm run preview
```

## Security Considerations

### ✅ Safe to Expose
- Cloudinary Cloud Name
- Image transformation parameters
- S3 image URLs (if public)

### ❌ Never Expose
- API Keys
- API Secrets
- Upload Presets (unless public)

## Troubleshooting

### Build Errors
- Ensure all environment variables are set
- Check that Cloudinary Cloud Name is correct
- Verify all imports are correct

### Runtime Errors
- Check browser console for errors
- Verify S3 URLs are accessible
- Ensure CORS is configured on S3 bucket

### Image Not Loading
- Verify S3 bucket allows public access
- Check Cloudinary Cloud Name is correct
- Test with Cloudinary's demo account first

## Example Deployment Workflow

### 1. Development
```bash
# Set up environment
echo "VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name" > .env

# Run dev server
npm run dev
```

### 2. Testing
```bash
# Test build
npm run build
npm run preview

# Check dist folder contents
ls -la dist/
```

### 3. Deployment
```bash
# Build for production
npm run build

# Deploy dist folder to your hosting platform
# (GitHub Pages, Netlify, Vercel, etc.)
```

## Cost and Limits

### Cloudinary Free Tier
- **Fetch API**: 25 credits/month
- **1 credit** = 1,000 transformations
- **No storage costs** (images stay in S3)

### S3 Costs
- **Storage**: Your existing S3 costs
- **Bandwidth**: Cloudinary fetches from S3, so you pay for outbound data transfer

## Best Practices

1. **Use appropriate image sizes** - Don't request 1200px for a 300px display
2. **Enable auto-format** - Use `f_auto` for automatic WebP/AVIF conversion
3. **Use auto-quality** - Use `q_auto` for automatic quality optimization
4. **Cache transformations** - Cloudinary caches results automatically
5. **Monitor usage** - Check Cloudinary dashboard for transformation counts
