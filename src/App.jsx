import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import imagesData from "./data/image";
import "./styles/custom.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "night-lights", "vintage", "warm-tones"];

  const filteredImages =
    selectedCategory === "All"
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.classList.add("no-scroll");
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    document.body.classList.remove("no-scroll");
  };

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar 
        onPrev={handlePrev}
        onNext={handleNext}
        selectedImage={selectedImage} 
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <Gallery 
          images={filteredImages} 
          onImageClick={handleImageClick} 
        />
      </div>

      <Lightbox
        image={selectedImage}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
