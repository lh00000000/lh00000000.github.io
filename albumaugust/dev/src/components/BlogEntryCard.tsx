import React, { useState, useRef, useEffect } from "react";
import VideoPreview from "./VideoPreview";
import { getThumbnailUrl, createPlaceholder } from "../utils/imageUtils";

interface BlogEntry {
  id: number;
  date: string;
  caption: string;
  image: string;
  hasImage: boolean;
  isVideo?: boolean;
}

interface BlogEntryCardProps {
  entry: BlogEntry;
}

const BlogEntryCard: React.FC<BlogEntryCardProps> = ({ entry }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [placeholderUrl, setPlaceholderUrl] = useState<string>("");
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create placeholder on mount
  useEffect(() => {
    setPlaceholderUrl(createPlaceholder(250, 200));
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        rootMargin: "150px", // Start loading 150px before the image comes into view
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageClick = () => {
    window.open(entry.image, "_blank");
  };

  const isVideo = (url: string) => {
    return (
      url.toLowerCase().endsWith(".mov") ||
      url.toLowerCase().endsWith(".mp4") ||
      url.toLowerCase().endsWith(".avi") ||
      url.toLowerCase().endsWith(".webm")
    );
  };

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          display: "inline-block",
          marginRight: "0.5rem",
          marginLeft: "1rem",
          verticalAlign: "middle",
        }}
      >
        {entry.isVideo || isVideo(entry.image) ? (
          <VideoPreview src={entry.image} alt="Blog video" />
        ) : (
          <div style={{ position: "relative" }}>
            {/* Low-res thumbnail */}
            {isInView && !isLoaded && !imageError && (
              <img
                src={getThumbnailUrl(entry.image, 100)}
                alt=""
                style={{
                  maxWidth: "250px",
                  maxHeight: "300px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  filter: "blur(3px)",
                  opacity: 0.9,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
            )}
            
            {/* Main image */}
            {isInView && (
              <img
                ref={imageRef}
                src={entry.image}
                alt="Blog image"
                style={{
                  maxWidth: "250px",
                  maxHeight: "300px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  cursor: "pointer",
                  transition: "opacity 0.5s ease",
                  opacity: isLoaded ? 1 : 0,
                  position: "relative",
                  zIndex: 1,
                }}
                onClick={handleImageClick}
                onLoad={() => setIsLoaded(true)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  setImageError(true);
                  target.style.display = "none";
                }}
              />
            )}
            
            {/* Loading placeholder */}
            {!isInView && placeholderUrl && (
              <img
                src={placeholderUrl}
                alt=""
                style={{
                  width: "250px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        )}
        <span
          style={{
            color: "#fff",
            padding: "2px 4px",
            fontFamily: "monospace",
            borderRadius: "3px",
            zIndex: 1,
            ...(entry.hasImage && {
              position: "absolute",
              top: "72%",
              right: "0px",
              transform: "scaleY(8) translateY(-50%)",
            }),
            ...(!entry.hasImage && {
              transform: "scaleY(3)",
            }),
          }}
        >
          {new Date(entry.date).toISOString().split("T")[0]}
        </span>
      </div>
      {entry.caption.split(" ").map((word, index) => (
        <span
          key={index}
          style={{
            color: "#222",
            fontSize: "1rem",
            transform: "scaleY(3)",
            verticalAlign: "top",
            // marginRight: "0.2rem",
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

export default BlogEntryCard;
