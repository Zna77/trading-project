import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-start h-full text-left ">
      <div className="w-fit lg:w-2/3 h-auto p-6">
        <h1 className="text-3xl text-left md:text-4xl lg:text-7xl uppercase font-bold text-black mb-4">
          Empowering your future with innovation
        </h1>
        <p className="text-md text-gray-800 ">
          Discover our cutting-edge courses designed to unlock your potential
          and propel you towards success.
        </p>
        <button className="mt-4 bg-indigo-600 text-xs text-white hover:bg-indigo-800 uppercase font-semibold py-3 px-2 rounded-3xl shadow-md transition duration-300 cursor-pointer">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Hero;
