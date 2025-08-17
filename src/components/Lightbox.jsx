import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Lightbox({ image, onClose, onPrev, onNext }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 lightbox-backdrop">
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-white hover:text-gray-400"
        onClick={onClose}
      >
        <X size={36} />
      </button>

      {/* Previous */}
      <button
        className="absolute left-6 text-white hover:text-gray-400"
        onClick={onPrev}
      >
        <ChevronLeft size={48} />
      </button>

      {/* Image */}
      <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] object-contain rounded-lg"
        />
        <p className="text-white mt-4 text-lg">{image.alt}</p>
      </div>

      {/* Next */}
      <button
        className="absolute right-6 text-white hover:text-gray-400"
        onClick={onNext}
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
}

export default Lightbox;
