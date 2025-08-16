# Cloudinary Setup for S3 Images

This project uses Cloudinary to serve S3-hosted images through Cloudinary's CDN with automatic optimization and transformations.

## 🚀 Quick Start (GitHub Pages)

**For GitHub Pages deployment without environment variables:**

1. **Get your Cloudinary cloud name** from [cloudinary.com](https://cloudinary.com)
2. **Edit `src/config/cloudinary.ts`** and replace `'your-cloud-name'` with your actual cloud name
3. **Run `npm run build`** to create your dist folder
4. **Deploy the dist folder to GitHub Pages**

**See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions.**

---

## 🔧 Full Setup (With Environment Variables)

**For platforms that support environment variables (Netlify, Vercel, etc.):**

## How It Works

Cloudinary's **Fetch API** allows you to serve external images (including S3) through their CDN without uploading the images to Cloudinary. The images are fetched on-demand and cached for performance.

**Important**: For public image serving, you only need your Cloudinary Cloud Name. API keys are NOT required and should NOT be exposed in client-side code.

## Setup Steps

### 1. Create a Cloudinary Account
- Go to [cloudinary.com](https://cloudinary.com) and sign up
- Note your **Cloud Name** from the dashboard
d
### 2. Get Your Cloud Name
- In your Cloudinary dashboard, note your **Cloud Name** (this is public and safe to use)
- You can find this in the top-right corner of your dashboard

### 3. API Keys (Optional - Only for Uploading)
- API keys are only needed if you plan to upload images directly to Cloudinary
- For serving S3 images, you don't need API keys

### 4. Configure Environment Variables
Copy `env.example` to `.env` and fill in your values:

```bash
cp env.example .env
```

Edit `.env`:
```env
VITE_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
```

**For testing, you can use Cloudinary's demo account:**
```env
VITE_CLOUDINARY_CLOUD_NAME=demo
```

### 5. Update Your S3 Image URLs
Replace your S3 image URLs with calls to `getThumbnailUrl()`:

```tsx
// Before (direct S3 URL)
<img src="https://your-bucket.s3.amazonaws.com/image.jpg" />

// After (Cloudinary CDN)
<img src={getThumbnailUrl("https://your-bucket.s3.amazonaws.com/image.jpg", 300)} />
```

## Available Functions

### Basic Thumbnail
```tsx
import { getThumbnailUrl } from './utils/imageUtils';

// Create a 300px wide thumbnail
const thumbnailUrl = getThumbnailUrl(s3ImageUrl, 300);
```

### Advanced Transformations
```tsx
import { cloudinaryUtils } from './utils/imageUtils';

// Responsive images
const responsiveUrls = cloudinaryUtils.getResponsiveImageUrl(s3ImageUrl, [300, 600, 900]);

// Blurred placeholder
const placeholderUrl = cloudinaryUtils.getBlurredPlaceholderUrl(s3ImageUrl, 50);

// WebP format
const webPUrl = cloudinaryUtils.getWebPUrl(s3ImageUrl, 600);

// Auto-optimized
const optimizedUrl = cloudinaryUtils.getOptimizedUrl(s3ImageUrl, 800);
```

## Transformation Parameters

Cloudinary supports many transformation parameters:

- `w_300` - Width 300px
- `h_200` - Height 200px
- `c_fill` - Crop mode
- `q_auto` - Auto quality
- `f_auto` - Auto format (WebP, AVIF, etc.)
- `blur_1000` - Blur effect
- `e_art:red_rock` - Artistic filters

## Benefits

1. **Automatic Optimization**: Cloudinary automatically chooses the best format and quality
2. **CDN Performance**: Images are served from Cloudinary's global CDN
3. **On-the-fly Transformations**: Resize, crop, and filter images without storing multiple versions
4. **Format Conversion**: Automatic WebP/AVIF conversion for modern browsers
5. **Lazy Loading**: Built-in lazy loading and progressive loading support

## Build and Deployment

### Vite Build
When you run `vite build`, the environment variables are embedded at build time. Since we only use the Cloud Name (which is public), this is completely safe.

```bash
npm run build
```

### Static File Serving
The built files can be served from any static file server:
- GitHub Pages
- Netlify
- Vercel
- Any web server (nginx, Apache, etc.)

### Environment Variables
- **Development**: Use `.env` file
- **Production**: Set `VITE_CLOUDINARY_CLOUD_NAME` in your build environment
- **GitHub Actions**: Add as repository secret
- **Netlify/Vercel**: Set in environment variables

## Cost Considerations

- **Fetch API**: Free tier includes 25 credits/month (1 credit = 1,000 transformations)
- **Storage**: No storage costs since images remain in S3
- **Bandwidth**: Only pay for transformations, not storage

## Troubleshooting

### Image Not Loading
- Check that your S3 bucket allows public access
- Verify the S3 URL is correct and accessible
- Check Cloudinary dashboard for any errors

### Performance Issues
- Use appropriate image sizes (don't request 1200px for a 300px display)
- Enable `q_auto` for automatic quality optimization
- Use `f_auto` for automatic format selection

### CORS Issues
- Ensure your S3 bucket CORS policy allows Cloudinary's domains
- Add this CORS policy to your S3 bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```
