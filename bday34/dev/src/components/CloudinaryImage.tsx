import React from 'react';
import { getThumbnailUrl, cloudinaryUtils } from '../utils/imageUtils';

interface CloudinaryImageProps {
  src: string; // S3 URL
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: boolean; // Show blurred placeholder
  responsive?: boolean; // Use responsive images
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  placeholder = false,
  responsive = false,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  // Generate the main image URL
  const imageUrl = width ? getThumbnailUrl(src, width) : cloudinaryUtils.getOptimizedUrl(src);
  
  // Generate placeholder URL if requested
  const placeholderUrl = placeholder ? cloudinaryUtils.getBlurredPlaceholderUrl(src, 50) : null;

  // Generate responsive URLs if requested
  const responsiveUrls = responsive ? cloudinaryUtils.getResponsiveImageUrl(src) : null;

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div 
        className={className}
        style={{
          width: width || 'auto',
          height: height || 'auto',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px',
          ...style
        }}
      >
        Image failed to load
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Placeholder image */}
      {placeholder && placeholderUrl && !imageLoaded && (
        <img
          src={placeholderUrl}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
            ...style
          }}
        />
      )}
      
      {/* Main image - use responsive if enabled, otherwise use regular */}
      {responsive && responsiveUrls ? (
        <img
          src={imageUrl}
          srcSet={responsiveUrls.map((url, index) => `${url} ${[300, 600, 900, 1200][index]}w`).join(', ')}
          sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, (max-width: 1200px) 900px, 1200px"
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            ...style
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <img
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            ...style
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default CloudinaryImage;
