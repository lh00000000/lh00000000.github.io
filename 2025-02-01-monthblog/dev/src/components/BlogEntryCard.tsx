import React from "react";
import VideoPreview from "./VideoPreview";

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
          <img
            src={entry.image}
            alt="Blog image"
            style={{
              maxWidth: "250px",
              maxHeight: "300px",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
            onClick={handleImageClick}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
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
