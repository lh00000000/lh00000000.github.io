export const THUMBNAIL_SIZE = 100;
export const EXPANDED_SIZE = 600;
export const ANIMATION_DURATION = 200; // ms

export const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif'] as const;
export const VIDEO_EXTENSIONS = ['mp4', 'mov', 'webm'] as const;

export const MEDIA_TYPES = {
  IMAGE: IMAGE_EXTENSIONS,
  VIDEO: VIDEO_EXTENSIONS
} as const; 