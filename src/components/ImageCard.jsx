import React from "react";

function ImageCard({ image, onClick }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group image-card bg-gray-100 flex items-center justify-center"
      onClick={() => onClick(image)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto max-h-96 object-contain transition-transform duration-300 group-hover:scale-105 image-fade"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
        <p className="text-lg font-semibold">{image.alt}</p>
      </div>
    </div>
  );
}

export default ImageCard;
