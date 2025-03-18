import React from "react";

const Marquee = () => {
  return (
    <div>
      <marquee
        behavior="scroll"
        direction="left"
        className="text-2xl text-secondary-color"
      >
        রৌমারী মুক্তাঞ্চল গবেষণা কেন্দ্র ও জাদুঘর। রৌমারী অঞ্চলের গৌরবময় ইতিহাস
        সংগ্রহ ও উপস্থাপনের একটি ক্ষুদ্র প্রচেষ্টা মাত্র
      </marquee>
      ;
    </div>
  );
};

export default Marquee;
