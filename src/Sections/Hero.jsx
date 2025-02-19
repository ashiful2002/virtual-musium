import React from "react";

import heroImage from "../../src/assets/rowmari-map.png";
import PageTitle from "../Components/Title/PageTitle";
const Hero = () => {
  return (
    <div className="mt-20 h-screen bg-amber-100">
      <div className="container mx-auto" id="link1">
        <PageTitle title="RMRC&M" />
        <div className="flex flex-col md:items-center justify-center gap-5">
          <div>
            <img width={400} className="mt-5 rounde " src={heroImage} alt="rowmari- map" />
          </div>
          <div>
            <h1 className="capitalize text-secondary-color">রৌমারী উপজেলা</h1>
            <p>
              বাংলাদেশের কুড়িগ্রাম জেলার একটি প্রশাসনিক এলাকা। এটি মুক্তাঞ্চল
              উপজেলা হিসেবে খ্যাত। কুড়িগ্রামের মূল ভূখণ্ডের সাথে এই উপজেলাটির
              কোনো সংযোগ সড়ক নেই, শুধু জল ভিত্তিক পরিবহন ব্যবস্থা রয়েছে। এই
              উপজেলাটি জামালপুর জেলার খুবই সন্নিকটে এবং ঢাকার সাথে যোগাযোগ
              ব্যবস্থা বেশ ভালো।{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
