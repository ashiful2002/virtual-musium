import React from "react";
import Hero from "./Sections/Hero";
import VCarousel from "../components/Carousel";
import Marquee from "./Sections/Marquee";
import Video from "./Sections/Video";
import PhotoGallery from "./Sections/PhotoGallery";

const Home = () => {
  return (
    <div className="container mt-20">
      <Marquee />
      <VCarousel />
      <Hero />
      <PhotoGallery />
      <Video />
    </div>
  );
};

export default Home;
