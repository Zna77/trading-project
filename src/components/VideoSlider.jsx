import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/custom-slick.css";

const VideoSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="py-6">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img
            className="rounded-xl overflow-hidden w-72 h-40 object-cover"
            src="/images/Screenshot 2024-04-23 at 20.16.34.png"
            alt="Screenshot 1"
          />
        </div>
        <div className="flex justify-center items-center px-2">
          <img
            className="rounded-xl overflow-hidden w-72 h-40 object-cover"
            src="/images/Screenshot 2024-04-28 at 22.02.58.jpg"
            alt="Screenshot 2"
          />
        </div>
        {/* Add more slides if needed */}
      </Slider>
    </div>
  );
};

export default VideoSlider;
