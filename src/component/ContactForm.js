import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white py-12 px-4 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E1D2D]">Let's Connect</h2>
          <p className="mt-2 text-gray-600">
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-bold text-[#1E1D2D]">
            Let's message me and make something together
          </h3>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded h-32"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
