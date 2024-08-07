import React from "react";
import Homepic from "../images/pic1.png";

const HomePage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-even p-10 bg-gray-100 px-auto">
      {/* Text Section */}
      <div className="text-center lg:text-left lg:max-w-lg">
        <p className="text-orange-500 text-lg lg:text-xl font-semibold">
          Hi, I'm
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-blue-900 my-2">
          Mary Hardy
        </h1>
        <p className="text-lg lg:text-xl text-blue-900">
          Digital Marketing Expert
        </p>
        <p className="text-gray-600 my-4">
          Shot what able cold new the see hold. Friendly as an betrayed formerly
          he. Morning because as to society behaved moments.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600">
            Download CV
          </button>
          <button className="border-2 border-orange-500 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white">
            Contact
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:max-w-lg">
        <img
          src={Homepic}
          alt="Mary Hardy"
          className="w-48 h-48 lg:w-80 lg:h-80 rounded-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default HomePage;
