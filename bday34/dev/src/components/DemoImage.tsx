import React from 'react';

// Demo component using Cloudinary's public demo account
// This works without any API keys or account setup
const DemoImage: React.FC = () => {
  // Example S3 URL (replace with your actual S3 URL)
  const s3ImageUrl = "https://your-s3-bucket.s3.amazonaws.com/image.jpg";
  
  // Using Cloudinary's demo account
  const cloudinaryUrl = `https://res.cloudinary.com/demo/image/fetch/w_300,q_auto,f_auto/${encodeURIComponent(s3ImageUrl)}`;
  
  // Alternative: Create a placeholder image using Cloudinary's demo
  const placeholderUrl = "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill,g_auto,f_auto,q_auto/sample.jpg";
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
      <h3>Cloudinary Demo (No Account Required)</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Your S3 Image (via Cloudinary):</h4>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
          S3 URL: {s3ImageUrl}
        </p>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
          Cloudinary URL: {cloudinaryUrl}
        </p>
        <img 
          src={cloudinaryUrl} 
          alt="S3 image via Cloudinary"
          style={{ maxWidth: '100%', border: '1px solid #ccc' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling!.style.display = 'block';
          }}
        />
        <div style={{ display: 'none', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
          <p>Image failed to load</p>
          <p style={{ fontSize: '12px' }}>This is expected if the S3 URL doesn't exist</p>
        </div>
      </div>
      
      <div>
        <h4>Cloudinary Demo Image:</h4>
        <img 
          src={placeholderUrl} 
          alt="Cloudinary demo image"
          style={{ maxWidth: '100%', border: '1px solid #ccc' }}
        />
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h5>How to Test:</h5>
        <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Replace the S3 URL above with your actual image URL</li>
          <li>The image will be served through Cloudinary's demo account</li>
          <li>No API keys or account setup required</li>
          <li>Perfect for testing before setting up your own account</li>
        </ol>
      </div>
    </div>
  );
};

export default DemoImage;
