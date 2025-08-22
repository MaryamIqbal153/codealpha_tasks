import React from "react";
import ImageCard from "./ImageCard";

function Gallery({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <ImageCard 
          key={image.id} 
          image={image} 
          onClick={onImageClick} 
        />
      ))}
    </div>
  );
}

export default Gallery;
