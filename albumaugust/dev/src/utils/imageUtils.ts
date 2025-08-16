// Image utility functions for optimizing loading performance
import { createCloudinaryUrl } from '../config/cloudinary';

/**
 * Generates a thumbnail URL for S3 images using Cloudinary
 * Cloudinary will fetch the image from S3 and serve it through their CDN
 */
export const getThumbnailUrl = (originalUrl: string, width: number = 100): string => {
  // Use Cloudinary to serve S3 images with transformations
  // This fetches the image from S3 and serves it through Cloudinary's CDN
  const transformations = `w_${width},q_auto,f_auto`;
  return createCloudinaryUrl(originalUrl, transformations);
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
 * Common Cloudinary transformations for different use cases
 */
export const commonTransformations = {
  // Avatar/Profile picture
  avatar: (size: number = 100) => `w_${size},h_${size},c_fill,g_face,f_auto,q_auto`,
  
  // Hero/Banner image
  hero: (width: number = 1200) => `w_${width},c_fill,f_auto,q_auto`,
  
  // Thumbnail with aspect ratio preservation
  thumbnail: (width: number = 300) => `w_${width},c_scale,f_auto,q_auto`,
  
  // Card image
  card: (width: number = 400, height: number = 300) => `w_${width},h_${height},c_fill,f_auto,q_auto`,
  
  // Gallery image
  gallery: (width: number = 600) => `w_${width},c_scale,f_auto,q_auto`,
  
  // Social media preview
  social: (width: number = 1200, height: number = 630) => `w_${width},h_${height},c_fill,f_auto,q_auto`,
  
  // Lazy loading placeholder
  lazyPlaceholder: (width: number = 50) => `w_${width},q_10,blur_1000,f_auto`,
  
  // High quality print
  print: (width: number = 2400) => `w_${width},q_100,f_auto`,
  
  // Mobile optimized
  mobile: (width: number = 400) => `w_${width},c_scale,f_auto,q_60`,
  
  // Desktop optimized
  desktop: (width: number = 800) => `w_${width},c_scale,f_auto,q_80`,
};

/**
 * Helper function to get URLs with common transformations
 */
export const getCommonImageUrl = (
  originalUrl: string, 
  transformationType: keyof typeof commonTransformations,
  ...args: any[]
): string => {
  const transformation = commonTransformations[transformationType];
  if (typeof transformation === 'function') {
    const transformString = transformation(...args);
    return createCloudinaryUrl(originalUrl, transformString);
  }
  return originalUrl;
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
 * Cloudinary-specific utilities for S3 images
 */
export const cloudinaryUtils = {
  /**
   * Creates a responsive image URL with multiple breakpoints
   */
  getResponsiveImageUrl: (originalUrl: string, breakpoints: number[] = [300, 600, 900, 1200]): string[] => {
    return breakpoints.map(width => getThumbnailUrl(originalUrl, width));
  },

  /**
   * Creates a blurred placeholder image URL
   */
  getBlurredPlaceholderUrl: (originalUrl: string, width: number = 50): string => {
    const transformations = `w_${width},q_10,blur_1000,f_auto`;
    return createCloudinaryUrl(originalUrl, transformations);
  },

  /**
   * Creates a WebP version of the image for better compression
   */
  getWebPUrl: (originalUrl: string, width?: number): string => {
    const transformations = width ? `w_${width},f_webp,q_auto` : 'f_webp,q_auto';
    return createCloudinaryUrl(originalUrl, transformations);
  },

  /**
   * Creates an optimized image URL with automatic quality and format
   */
  getOptimizedUrl: (originalUrl: string, width?: number): string => {
    const transformations = width ? `w_${width},q_auto,f_auto` : 'q_auto,f_auto';
    return createCloudinaryUrl(originalUrl, transformations);
  }
};

/**
 * AWS S3 specific utilities (kept for backward compatibility)
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
   * Creates a thumbnail URL for S3 images using Cloudinary
   */
  getS3ThumbnailUrl: (originalUrl: string, width: number = 100): string => {
    // Now using Cloudinary to serve S3 images
    return getThumbnailUrl(originalUrl, width);
  }
};