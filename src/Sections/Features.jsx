import React from "react";

import heroImage from "../assets/react.svg";
import PageTitle from "../Components/Title/PageTitle";
import Section from "../Components/Section";
const Features = () => {
  return (
    <Section id="link2">
      <div className="h-screen">
        <div className="">
          <PageTitle heading="second section" />
          <div className="flex flex-row-reverse items-center justify-center gap-5">
            <div>
              <img width={400} src={heroImage} alt="heroImage" />
            </div>
            <div>
              <h1 className="capitalize text-primary-color">heading text</h1>
              <p className="capitalize text-secondary-color">
                little description Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Necessitatibus, aliquid, nulla ullam esse ab
                repellendus, delectus veniam rerum quam vero rem nemo quia
                facere dolorem minus quisquam consequatur optio eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
