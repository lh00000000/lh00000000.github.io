'use client';

import { useEffect, useState } from 'react';
import { Block } from '../types';
import MediaCard from '../components/MediaCard';
import { IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from '../vocab';
import blocks from '../data/blocks.json';
export default function BlogPostPage() {
  const [posts, setPosts] = useState<Block[]>([]);


  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch('/data/posts.json');
      const data = await response.json();
      setPosts(data);
    };
    loadPosts();
  }, []);

  const getMediaType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase() || '';
    if ((IMAGE_EXTENSIONS as readonly string[]).includes(extension)) return 'IMAGE';
    if ((VIDEO_EXTENSIONS as readonly string[]).includes(extension)) return 'VIDEO';
    return 'IMAGE'; // Default to image if unknown
  };

  return (
    <main style={{ 
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "system-ui, -apple-system, sans-serif",
      lineHeight: "1.6"
    }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((post, index) => (
          <div key={post.ts} style={{ display: "inline" }}>
            <MediaCard 
              url={post.asset} 
              type={getMediaType(post.asset)} 
            />
            <span style={{ marginRight: "8px" }}>{post.caption}</span>
            {index < posts.length - 1 && " "}
          </div>
        ))}
      </div>
    </main>
  );
}
