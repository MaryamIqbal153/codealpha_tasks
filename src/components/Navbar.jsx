import React from "react";

function Navbar({ onPrev, onNext, selectedImage }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Gallery</h1>

      {/* Show Prev/Next buttons only if a lightbox image is selected */}
      {selectedImage && (
        <div className="flex gap-4">
          <button
            onClick={onPrev}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
          >
            Next
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
