// InfoSection.js
import React from "react";
import { FaUserTie, FaClipboardCheck, FaHeadset } from "react-icons/fa";

const InfoSection = () => {
  return (
    <div className="py-6 px-4 md:px-24 relative">
      <div className="flex flex-col md:flex-row gap-6 py-3 justify-around items-center bg-white rounded-full shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-500 rounded-full p-4 mb-2">
            <FaUserTie className="text-white w-10 h-10" />
          </div>
          <h3 className="text-blue-900 font-bold">8 years job</h3>
          <p className="text-orange-500">Experience</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-500 rounded-full p-4 mb-2">
            <FaClipboardCheck className="text-white w-10 h-10" />
          </div>
          <h3 className="text-blue-900 font-bold">500+ Projects</h3>
          <p className="text-orange-500">Completed</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-500 rounded-full p-4 mb-2">
            <FaHeadset className="text-white w-10 h-10" />
          </div>
          <h3 className="text-blue-900 font-bold">Support</h3>
          <p className="text-orange-500">Online 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
