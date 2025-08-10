# Birthday Blog with Cloudinary Integration

A React-based birthday blog that serves S3 images through Cloudinary's CDN for optimal performance and image transformations.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Cloudinary
Edit `src/config/cloudinary.ts`:
```typescript
export const cloudinaryConfig = {
  cloudName: 'your-cloud-name', // ← Replace with your actual cloud name
};
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── CloudinaryImage.tsx    # Cloudinary image component
│   ├── DemoImage.tsx          # Demo component for testing
│   └── ReccList.tsx           # Recommendation list component
├── config/
│   └── cloudinary.ts          # Cloudinary configuration
├── utils/
│   └── imageUtils.ts          # Image utility functions
└── App.tsx                    # Main application
```

## 🖼️ Cloudinary Integration

This project uses Cloudinary's Fetch API to serve S3 images through their CDN:

- **No image uploads required** - Images stay in S3
- **Automatic optimization** - WebP, AVIF, quality optimization
- **On-the-fly transformations** - Resize, crop, filters
- **Global CDN** - Faster image delivery worldwide

### Example Usage

```tsx
import { getThumbnailUrl } from './utils/imageUtils';

// Create a 300px wide thumbnail
const thumbnailUrl = getThumbnailUrl(s3ImageUrl, 300);

// Use in your component
<img src={thumbnailUrl} alt="Optimized image" />
```

## 🚀 Deployment

### GitHub Pages (No Environment Variables)
1. **Update cloudinary.ts** with your cloud name
2. **Build**: `npm run build`
3. **Deploy**: Copy `dist/` folder to GitHub Pages

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions.

### Other Platforms
- **Netlify**: Set `VITE_CLOUDINARY_CLOUD_NAME` in environment variables
- **Vercel**: Set `VITE_CLOUDINARY_CLOUD_NAME` in environment variables
- **Any static server**: Copy `dist/` folder and serve

## 🧪 Testing

### Demo Mode
Use Cloudinary's demo account for testing:
```typescript
export const cloudinaryConfig = {
  cloudName: 'demo', // Uses public demo account
};
```

### Local Testing
```bash
npm run dev          # Development server
npm run build        # Build for production
npm run preview      # Preview built files
```

## 📚 Documentation

- [CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md) - Complete setup guide
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - GitHub Pages deployment
- [BUILD_AND_DEPLOY.md](./BUILD_AND_DEPLOY.md) - Build and deployment guide

## 🔧 Available Functions

### Basic Functions
- `getThumbnailUrl(url, width)` - Create thumbnails
- `cloudinaryUtils.getOptimizedUrl(url, width)` - Auto-optimized images
- `cloudinaryUtils.getWebPUrl(url, width)` - WebP format conversion

### Advanced Functions
- `cloudinaryUtils.getResponsiveImageUrl(url, breakpoints)` - Responsive images
- `cloudinaryUtils.getBlurredPlaceholderUrl(url, width)` - Blurred placeholders
- `getCommonImageUrl(url, type, ...args)` - Predefined transformations

### Common Transformations
```typescript
import { getCommonImageUrl } from './utils/imageUtils';

// Avatar (square, face-focused)
const avatarUrl = getCommonImageUrl(s3Url, 'avatar', 100);

// Hero image
const heroUrl = getCommonImageUrl(s3Url, 'hero', 1200);

// Thumbnail
const thumbUrl = getCommonImageUrl(s3Url, 'thumbnail', 300);
```

## 💰 Cost

- **Cloudinary Free Tier**: 25,000 transformations/month
- **No storage costs** - Images remain in S3
- **Only pay for transformations** - Not bandwidth or storage

## 🆘 Troubleshooting

### Images Not Loading
- Verify Cloudinary cloud name is correct
- Check S3 URLs are accessible
- Ensure S3 bucket allows public access

### Build Errors
- Check all imports are correct
- Verify Cloudinary cloud name is set
- Look for TypeScript syntax errors

### GitHub Pages Issues
- Wait a few minutes for changes to propagate
- Check the correct branch/folder is deployed
- Verify build completed successfully

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev` and `npm run build`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
