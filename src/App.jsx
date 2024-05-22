import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import VideoSlider from "./components/VideoSlider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4">
          <Hero />
          <VideoSlider />
          <CourseCard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
