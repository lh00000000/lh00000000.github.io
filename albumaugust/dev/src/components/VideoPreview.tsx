import React, { useRef, useState } from 'react'

interface VideoPreviewProps {
  src: string
  alt?: string
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ src, alt = "Video preview" }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    // Create a new window with video streaming
    const videoWindow = window.open('', '_blank')
    if (videoWindow) {
      videoWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Video Player</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              background: #000;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              font-family: monospace;
            }
            .video-container {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            video {
              max-width: 100vw;
              max-height: 80vh;
              width: auto;
              height: auto;
            }
            .back-button {
              position: absolute;
              top: -40px;
              left: 0;
              background: rgba(255, 255, 255, 0.9);
              color: #000;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-family: monospace;
              font-size: 14px;
              transition: background 0.2s ease;
            }
            .back-button:hover {
              background: rgba(255, 255, 255, 1);
            }
          </style>
        </head>
        <body>
          <div class="video-container">
            <button class="back-button" onclick="window.close()">← Back to Blog</button>
            <video controls autoplay>
              <source src="${src}" type="video/mp4">
              <source src="${src}" type="video/quicktime">
              Your browser does not support the video tag.
            </video>
          </div>
        </body>
        </html>
      `)
      videoWindow.document.close()
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        style={{
          maxWidth: '250px',
          maxHeight: '300px',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
          display: 'block'
        }}
        muted
        loop
        playsInline
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isHovered ? 0 : 1,
        transition: 'opacity 0.2s ease'
      }}>
        <div style={{
          width: 0,
          height: 0,
          borderLeft: '12px solid #fff',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          marginLeft: '4px'
        }} />
      </div>
    </div>
  )
}

export default VideoPreview 