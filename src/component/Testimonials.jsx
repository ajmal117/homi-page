import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import test1 from "../images/test1.png";
import test2 from "../images/test2.png";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Beseie Cooper",
    title: "Web Designer",
    feedback:
      "Loved the template design, documentation, customizability and the customer support from Marketify team!",
    rating: 5,
    image: test1,
  },
  {
    id: 2,
    name: "John Doe",
    title: "Software Engineer",
    feedback:
      "The service provided was amazing! The team was incredibly responsive and helped me solve any issues quickly. Highly recommend!",
    rating: 5,
    image: test2,
  },
  // Add more testimonials as needed
];

// Custom Arrow component
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="text-gray-600 hover:text-gray-900 p-2 bg-gray-200 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="text-orange-500 hover:text-orange-700 p-2 bg-gray-200 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

// Testimonial card component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 my-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-40 h-40 rounded-full object-cover"
    />
    <div className="flex-1">
      <h3 className="text-xl font-bold text-blue-900">{testimonial.name}</h3>
      <p className="text-orange-500 font-semibold">{testimonial.title}</p>
      <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
      <div className="flex items-center mt-4">
        {Array(testimonial.rating)
          .fill()
          .map((_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
      </div>
    </div>
  </div>
);

// Testimonials slider component
const Testimonials = () => {
  // Slider settings
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 py-16 px-4 md:px-24">
      <div className="text-center mb-12">
        <h3 className="text-orange-500 text-xl font-semibold">
          Clients Are Satisfied For
        </h3>
        <h2 className="text-blue-900 text-3xl font-bold">
          Our Work, View Feedback
        </h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-12">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
