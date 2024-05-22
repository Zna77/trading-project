import React from "react";

const Header = () => {
  return (
    <header className="hidden md:flex bg-black text-white py-4 font-roboto">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Your logo here */}
            <img className="h-10" src="/assets/images/logo.png" alt="Logo" />
            <h1 className="text-lg hover:cursor-pointer uppercase font-extrabold ml-2">
              Website Name
            </h1>
          </div>
          <nav>
            <ul className="flex">
              <li className="mr-3">
                <a
                  href="#"
                  className="hover:text-gray-300 hover:cursor-pointer text-base font-medium"
                >
                  Home
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="#"
                  className="hover:text-gray-300 hover:cursor-pointer text-base font-medium "
                >
                  Courses
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="#"
                  className="hover:text-gray-300 hover:cursor-pointer text-base font-medium  "
                >
                  About Us
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="#"
                  className="hover:text-gray-300 hover:cursor-pointer text-base font-medium  "
                >
                  Contact Us
                </a>
              </li>
              <li className="mr-9">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white uppercase font-bold py-2 px-5 rounded-3xl  transition duration-300  "
                >
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
