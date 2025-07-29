// Image utility functions for optimizing loading performance

/**
 * Generates a thumbnail URL for S3 images
 * This can be customized based on your CDN setup
 */
export const getThumbnailUrl = (originalUrl: string, width: number = 100): string => {
  // Option 1: If using CloudFront with Lambda@Edge
  // return `${originalUrl}?w=${width}&q=60&f=webp`;
  
  // Option 2: If using AWS CloudFront with Image Optimizer
  // return `${originalUrl}?width=${width}&quality=60&format=webp`;
  
  // Option 3: If using a custom thumbnail path structure
  // const urlParts = originalUrl.split('/');
  // const filename = urlParts[urlParts.length - 1];
  // const thumbnailPath = originalUrl.replace(filename, `thumbnails/${width}/${filename}`);
  // return thumbnailPath;
  
  // Option 4: If using AWS S3 with pre-generated thumbnails
  // return originalUrl.replace('/iosupload/', `/iosupload/thumbnails/${width}/`);
  
  // For now, we'll use the same URL but you can implement any of the above
  // The best approach depends on your AWS setup:
  // - CloudFront with Lambda@Edge for on-the-fly resizing
  // - Pre-generated thumbnails stored in S3
  // - Third-party services like imgix, Cloudinary, etc.
  
  return originalUrl;
};

/**
 * Creates a data URL for a simple placeholder
 */
export const createPlaceholder = (width: number = 250, height: number = 200): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a subtle gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f8f9fa');
    gradient.addColorStop(1, '#e9ecef');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add some subtle dots
    ctx.fillStyle = '#dee2e6';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  return canvas.toDataURL();
};

/**
 * Preloads an image and returns a promise
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Checks if an image is already cached
 */
export const isImageCached = (src: string): boolean => {
  const img = new Image();
  img.src = src;
  return img.complete;
};

/**
 * Generates a low-quality placeholder from the actual image
 * This creates a very small, blurred version of the original image
 */
export const generateLowQualityPlaceholder = async (imageUrl: string): Promise<string> => {
  try {
    const img = await preloadImage(imageUrl);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return createPlaceholder();
    
    // Create a very small version (10x10 pixels)
    canvas.width = 10;
    canvas.height = 10;
    
    // Draw the image scaled down
    ctx.drawImage(img, 0, 0, 10, 10);
    
    // Scale it back up with blur effect
    const scaledCanvas = document.createElement('canvas');
    const scaledCtx = scaledCanvas.getContext('2d');
    
    if (!scaledCtx) return createPlaceholder();
    
    scaledCanvas.width = 250;
    scaledCanvas.height = 200;
    
    // Apply blur by scaling up the small image
    scaledCtx.imageSmoothingEnabled = true;
    scaledCtx.imageSmoothingQuality = 'low';
    scaledCtx.drawImage(canvas, 0, 0, 250, 200);
    
    return scaledCanvas.toDataURL('image/jpeg', 0.1);
  } catch (error) {
    // Fallback to generic placeholder
    return createPlaceholder();
  }
};

/**
 * AWS S3 specific utilities
 */
export const s3Utils = {
  /**
   * Extracts the S3 key from a full S3 URL
   */
  getS3Key: (url: string): string => {
    const match = url.match(/\/iosupload\/(.+)$/);
    return match ? match[1] : '';
  },
  
  /**
   * Creates a thumbnail URL for S3 images
   * Assumes you have a thumbnail generation system in place
   */
  getS3ThumbnailUrl: (originalUrl: string, width: number = 100): string => {
    // This is where you'd implement your S3 thumbnail logic
    // Examples:
    
    // 1. Using CloudFront with Lambda@Edge
    // return `${originalUrl}?w=${width}&q=60`;
    
    // 2. Using a separate thumbnail bucket
    // const s3Key = s3Utils.getS3Key(originalUrl);
    // return `https://your-thumbnail-bucket.s3.amazonaws.com/${width}/${s3Key}`;
    
    // 3. Using AWS Image Optimizer
    // return `${originalUrl}?width=${width}&quality=60&format=webp`;
    
    return originalUrl;
  }
};