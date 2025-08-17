import React from "react";

function Filters({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex gap-4 justify-center my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-white font-medium transition 
            ${
              selectedCategory === category
                ? "bg-blue-600"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filters;
