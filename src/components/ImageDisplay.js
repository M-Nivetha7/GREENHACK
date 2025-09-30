import React from 'react';

const ImageDisplay = ({ imageData, title = "Original Image" }) => {
  return (
    <div className="image-display">
      <h3>{title}</h3>
      <div className="image-container">
        <img 
          src={imageData.url} 
          alt={title}
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}
        />
        <div className="image-info">
          <p>Dimensions: {imageData.width} x {imageData.height}</p>
          <p>File: {imageData.file.name}</p>
          <p>Size: {(imageData.file.size / 1024).toFixed(2)} KB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;