import React from "react";
import Button from "../utils/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer collections
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover Stylish Nike Arrivals, quality comport, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {" "}
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex w-full flex-1 items-center justify-center bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoe1}
          alt=""
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
