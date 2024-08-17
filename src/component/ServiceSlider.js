import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function ServiceSlider() {
  const sliderRef = useRef(null);

  const settings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: false, // Disable default arrows
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 md:px-24 px-4 ">
      <div className="md:flex-row flex flex-col w-full">
        {/* Left Fixed Services Info */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left z-10 bg-white">
          <h2 className="text-orange-500 text-lg font-semibold">Services</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 my-4">
            I Provide Wide Range Of Digital Services
          </h1>

          <div className="flex mt-4 justify-center md:justify-start">
            <button
              className="p-2 rounded-full bg-gray-300 text-blue-900"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="p-2 mx-7 rounded-full bg-orange-500 text-white"
              onClick={nextSlide}
            >
              →
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="w-full md:w-2/3">
          <Slider ref={sliderRef} {...settings}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 text-center shadow-lg ${service.bgColor} text-white rounded-lg mx-4`} // Updated: Added mx-4 for spacing
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
