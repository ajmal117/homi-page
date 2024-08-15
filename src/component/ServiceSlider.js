import React, { useState } from "react";

const services = [
  {
    title: "App Development",
    description: "Rror te inal desiga othe fal dveoprer age your adca",
    icon: "📱",
    bgColor: "bg-teal-500",
  },
  {
    title: "UI/UX Design",
    description: "Rror te inal desiga othe fal dveoprer age your adca",
    icon: "🎨",
    bgColor: "bg-purple-500",
  },
  {
    title: "Web Design",
    description: "Rror te inal desiga othe fal dveoprer age your adca",
    icon: "💻",
    bgColor: "bg-yellow-500",
  },
  {
    title: "Digital Marketing",
    description: "Rror te inal desiga othe fal dveoprer age your adca",
    icon: "📢",
    bgColor: "bg-red-500",
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10">
      <div className="md:w-2/3 flex-col md:flex items-center">
        {/* Left Fixed Services Info */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-orange-500 text-lg font-semibold">Services</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 my-4">
            I Provide Wide Range Of Digital Services
          </h1>

          {/* Navigation Arrows for Mobile */}
          <div className="flex justify-center  mt-4">
            <button
              className="p-2 mx-2 rounded-full bg-gray-300 text-blue-900"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="p-2 mx-2 rounded-full bg-orange-500 text-white"
              onClick={nextSlide}
            >
              →
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="w-full md:w-2/3 relative">
          <div
            className="flex transition-transform transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`min-w-full p-6 text-center shadow-lg ${service.bgColor} text-white rounded-lg mx-2`}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows for Desktop */}
        </div>
      </div>
    </div>
  );
}
