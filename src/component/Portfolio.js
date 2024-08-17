import React, { useState } from "react";

import clg1 from "../images/clg1.png";
import clg2 from "../images/clg2.png";
import clg3 from "../images/clg3.png";
import clg4 from "../images/clg4.png";
import clg5 from "../images/clg5.png";
import clg6 from "../images/clg6.png";

const Portfolio = () => {
  // State to manage the current category
  const [currentCategory, setCurrentCategory] = useState("All");

  // Example data for images
  const images = [
    { id: 1, category: "Youtube", src: clg1 },
    { id: 2, category: "Vimeo", src: clg2 },
    { id: 3, category: "Soundcloud", src: clg3 },
    { id: 4, category: "Popup", src: clg4 },
    { id: 5, category: "Details", src: clg5 },
    { id: 6, category: "Odd work", src: clg6 },
    // Add more images here
  ];

  // Function to filter images based on category
  const filteredImages =
    currentCategory === "All"
      ? images
      : images.filter((image) => image.category === currentCategory);

  return (
    <div className="p-4 py-16 px-4 md:px-24">
      <div className="text-center mb-5">
        <h3 className="text-orange-500 text-xl font-semibold">Portfolio</h3>
        <h2 className="text-blue-900 text-3xl font-bold">My Amazing Works</h2>
      </div>
      <nav className="mb-8 flex justify-center">
        <ul className="flex space-x-6 text-lg font-semibold text-center">
          <li
            onClick={() => setCurrentCategory("All")}
            className={`cursor-pointer ${
              currentCategory === "All"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-800"
            }`}
          >
            All
          </li>
          <li
            onClick={() => setCurrentCategory("Youtube")}
            className={`cursor-pointer ${
              currentCategory === "Youtube"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-800"
            }`}
          >
            Youtube
          </li>
          <li
            onClick={() => setCurrentCategory("Vimeo")}
            className={`cursor-pointer ${
              currentCategory === "Vimeo"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-800"
            }`}
          >
            Vimeo
          </li>
          <li
            onClick={() => setCurrentCategory("Soundcloud")}
            className={`cursor-pointer ${
              currentCategory === "Soundcloud"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-800"
            }`}
          >
            Soundcloud
          </li>
          <li
            onClick={() => setCurrentCategory("Popup")}
            className={`cursor-pointer ${
              currentCategory === "Popup"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-800"
            }`}
          >
            Popup
          </li>
          <li
            onClick={() => setCurrentCategory("Details")}
            className={`cursor-pointer ${
              currentCategory === "Details"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-blue-800"
            }`}
          >
            Details
          </li>
        
        </ul>
      </nav>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              src={image.src}
              alt={image.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
