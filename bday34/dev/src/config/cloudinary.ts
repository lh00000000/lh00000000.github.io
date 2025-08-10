// Cloudinary configuration for public image serving
// For GitHub Pages deployment, you can hardcode your cloud name here
export const cloudinaryConfig = {
  // ⚠️ IMPORTANT: Replace this with your actual Cloudinary cloud name
  cloudName: 'your-cloud-name', // ← Change this to your actual cloud name
  
  // 🧪 For testing without setup, uncomment this line:
  // cloudName: 'demo',
};

// Base URL for Cloudinary transformations
export const getCloudinaryBaseUrl = () => {
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/fetch`;
};

// Helper function to create Cloudinary URLs for external images
export const createCloudinaryUrl = (
  externalUrl: string,
  transformations: string = ''
): string => {
  const baseUrl = getCloudinaryBaseUrl();
  const encodedUrl = encodeURIComponent(externalUrl);
  return `${baseUrl}/${transformations}/${encodedUrl}`;
};

// Alternative: Use Cloudinary's demo account for testing
export const getDemoCloudinaryUrl = (
  externalUrl: string,
  transformations: string = ''
): string => {
  const baseUrl = 'https://res.cloudinary.com/demo/image/fetch';
  const encodedUrl = encodeURIComponent(externalUrl);
  return `${baseUrl}/${transformations}/${encodedUrl}`;
};
