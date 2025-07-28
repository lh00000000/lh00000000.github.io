import { useState } from 'react';
import { THUMBNAIL_SIZE, EXPANDED_SIZE, MEDIA_TYPES } from '../vocab';
import { MediaType } from '../types';

interface MediaCardProps {
  url: string;
  type: MediaType;
}

export default function MediaCard({ url, type }: MediaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const size = isExpanded ? EXPANDED_SIZE : THUMBNAIL_SIZE;

  if (type === 'VIDEO') {
    return (
      <div style={{ display: 'inline-block', margin: '4px' }}>
        <video
          src={url}
          width={size}
          height={size}
          style={{ objectFit: 'cover', cursor: 'pointer' }}
          onClick={toggleExpand}
          controls={isExpanded}
          playsInline
          preload="none"
        />
        {isExpanded && (
          <button 
            onClick={toggleExpand}
            style={{
              display: 'block',
              margin: '4px auto',
              padding: '4px 8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            Minimize
          </button>
        )}
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-block', margin: '4px' }}>
      <img
        src={url}
        width={size}
        height={size}
        style={{ objectFit: 'cover', cursor: 'pointer' }}
        onClick={toggleExpand}
        loading="lazy"
      />
      {isExpanded && (
        <button 
          onClick={toggleExpand}
          style={{
            display: 'block',
            margin: '4px auto',
            padding: '4px 8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }}
        >
          Minimize
        </button>
      )}
    </div>
  );
} 