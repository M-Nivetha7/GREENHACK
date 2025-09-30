import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageDisplay from './components/ImageDisplay';
import ImageProcessor from './components/ImageProcessor';
import './App.css';

function App() {
  const [imageData, setImageData] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Image Processing App</h1>
        <p>Upload and process images with React</p>
      </header>

      <div className="app-container">
        <ImageUploader onImageLoad={setImageData} />
        
        {imageData && (
          <div className="processing-section">
            <ImageDisplay imageData={imageData} />
            <ImageProcessor 
              imageData={imageData} 
              onProcess={setProcessedImage}
            />
          </div>
        )}

        {processedImage && (
          <ImageDisplay imageData={processedImage} title="Processed Image" />
        )}
      </div>
    </div>
  );
}

export default App; // ← ADD THIS LINE