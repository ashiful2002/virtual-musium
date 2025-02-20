import React from "react";

import heroImage from "../../../assets/dakghor.jpg";
import PageTitle from "../../../Components/Title/PageTitle";
import VCarousel from "../../components/Carousel";
const Hero = () => {
  return (
    <div className="">
      <div className="container mx-auto" id="link1">
        <PageTitle title="RMRC&M" />
        <marquee
          behavior="scroll"
          direction="left"
          className="text-2xl text-secondary-color"
        >
          রৌমারী মুক্তাঞ্চল গবেষণা কেন্দ্র ও জাদুঘর। রৌমারী অঞ্চলের গৌরবময়
          ইতিহাস সংগ্রহ ও উপস্থাপনের একটি ক্ষুদ্র প্রচেষ্টা মাত্র
        </marquee>
        <div className="flex flex-col justify-center gap-5 md:items-center">
          <div>
            <img
              width={400}
              className="rounde mt-5"
              src={heroImage}
              alt="Hero Image"
            />
          </div>
          <div>
            <h1 className="capitalize text-secondary-color">
              রৌমারী পোস্ট অফিস
            </h1>
            <p>
              রৌমারী পোস্ট অফিস ( বাংলাদেশের প্রথম ডাকঘর) ২৮ আগস্ট, ১৯৭১
              জেডফোর্স কমান্ডার মেজর জিয়াউর রহমান আনুষ্ঠানিক উদ্বোধনের মাধ্যমে
              বাংলাদেশের মুক্ত মাটিতে প্রথম বেসামরিক প্রশাসন ব্যবস্থা চালু করেন।
              ডাক বিভাগের কর্মকর্তাদের মতে, ১৯৪৭ সালে উপমহাদেশ বিভক্তির পরপরই
              রৌমারী শাখা ডাকঘর প্রতিষ্ঠিত হয়।
            </p>
          </div>
        </div>
        <VCarousel />

      </div>
    </div>
  );
};

export default Hero;
