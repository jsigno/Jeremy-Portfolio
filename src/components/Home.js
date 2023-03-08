import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#0c4a6e]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p
          className="text-green-600 text-3xl"
          data-aos="fade-down-left"
          data-aos-delay="1000"
        >
          Hi, my name is
        </p>
        <h1
          className="text-4xl sm:text-9xl font-bold text-white"
          data-aos="flip-down"
          data-aos-delay="500"
        >
          Jeremy Cornejo
        </h1>
        <h2
          className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-delay="1500"
          data-aos-duration="7000"
        >
          Project Manager.
        </h2>
        <p className="text-[#fff] py-4 max-w-[700px]">
          My goal is to inform & provide quality service by
          <RoughNotationGroup show={true}>
            <RoughNotation
              type="underline"
              color="green"
              strokeWidth="2"
              animationDelay="1800"
            >
              {" "}
              educating{" "}
            </RoughNotation>
            and walking through each step with every property and home owner{" "}
            <RoughNotation
              type="underline"
              color="green"
              strokeWidth="2"
              animationDelay="1800"
            >
              elite{" "}
            </RoughNotation>
          </RoughNotationGroup>
          level of world class customer service.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
              Get a Complimentary Inspection
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
