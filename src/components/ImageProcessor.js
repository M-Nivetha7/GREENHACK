import React, { useState } from 'react';

const ImageProcessor = ({ imageData, onProcess }) => {
  const [processing, setProcessing] = useState(false);
  const [filters, setFilters] = useState({
    grayscale: false,
    blur: 0,
    brightness: 100,
    contrast: 100
  });

  const applyFilters = async () => {
    setProcessing(true);
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Apply filters
      ctx.filter = `
        grayscale(${filters.grayscale ? 100 : 0}%)
        blur(${filters.blur}px)
        brightness(${filters.brightness}%)
        contrast(${filters.contrast}%)
      `;
      
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        const processedUrl = URL.createObjectURL(blob);
        onProcess({
          ...imageData,
          url: processedUrl,
          file: new File([blob], `processed_${imageData.file.name}`, { type: 'image/jpeg' })
        });
        setProcessing(false);
      }, 'image/jpeg', 0.9);
    };
    
    img.src = imageData.url;
  };

  return (
    <div className="processor-container">
      <h3>Image Processing</h3>
      
      <div className="filters">
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={filters.grayscale}
              onChange={(e) => setFilters({...filters, grayscale: e.target.checked})}
            />
            Grayscale
          </label>
        </div>

        <div className="filter-group">
          <label>Blur: {filters.blur}px</label>
          <input
            type="range"
            min="0"
            max="10"
            value={filters.blur}
            onChange={(e) => setFilters({...filters, blur: parseInt(e.target.value)})}
          />
        </div>

        <div className="filter-group">
          <label>Brightness: {filters.brightness}%</label>
          <input
            type="range"
            min="50"
            max="150"
            value={filters.brightness}
            onChange={(e) => setFilters({...filters, brightness: parseInt(e.target.value)})}
          />
        </div>

        <div className="filter-group">
          <label>Contrast: {filters.contrast}%</label>
          <input
            type="range"
            min="50"
            max="150"
            value={filters.contrast}
            onChange={(e) => setFilters({...filters, contrast: parseInt(e.target.value)})}
          />
        </div>
      </div>

      <button 
        className="process-btn"
        onClick={applyFilters}
        disabled={processing}
      >
        {processing ? '🔄 Processing...' : '✨ Apply Filters'}
      </button>
    </div>
  );
};

export default ImageProcessor;