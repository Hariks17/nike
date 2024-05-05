import React from "react";
import Button from "../utils/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="text-lg text-orange-600">Our Summer collections</p>
        <h1 className="text-8xl font-bold">
          <span>The New Arrival</span>
          <br />
          <span className="text-['coral-red]">Nike</span> Shoes
        </h1>
        <p className="text-gray-400">
          Discover Stylish Nike Arrivals, quality comport, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {" "}
          {statistics.map((stat, index) => (
            <div key={index}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
