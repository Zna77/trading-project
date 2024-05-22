import React from "react";

const CourseCard = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Suggestions</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <li className="bg-white h-full first-line: rounded-md shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Testimonials</h3>
            <p className="text-gray-700">
              Taking courses from this platform has been a transformative
              experience for me. The instructors are not only knowledgeable but
              also incredibly engaging, making learning enjoyable and rewarding.
              The diverse range of courses offered has allowed me to explore new
              topics and develop valuable skills that have helped me advance in
              my career. I highly recommend this platform to anyone looking to
              expand their knowledge and achieve their goals.
            </p>
          </li>
          <li className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Featured Courses</h3>
            <p className="text-gray-700">
              I cannot speak highly enough of the courses offered on this
              platform. From the comprehensive content to the supportive
              community, every aspect of the learning experience is top-notch.
              The instructors are passionate about their subjects and go above
              and beyond to ensure that students understand the material. Thanks
              to the skills I've acquired here, I've been able to take on new
              challenges with confidence and excel in my field. I am grateful
              for the opportunity to learn and grow with this platform.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CourseCard;
