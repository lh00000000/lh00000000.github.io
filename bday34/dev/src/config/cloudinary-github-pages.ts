// Cloudinary configuration for GitHub Pages deployment
// No environment variables needed - just hardcode your cloud name

export const cloudinaryConfig = {
  // ⚠️ IMPORTANT: Replace this with your actual Cloudinary cloud name
  cloudName: 'dgwqhdbso',
  
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

// Quick setup instructions:
// 1. Go to cloudinary.com and sign up
// 2. Find your cloud name in the dashboard (top-right corner)
// 3. Replace 'your-cloud-name' above with your actual cloud name
// 4. Save this file
// 5. Run 'npm run build' to create your dist/ folder
// 6. Deploy the dist/ folder to GitHub Pages
