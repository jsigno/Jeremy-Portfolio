import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portrait from "../images/Portrait.png";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#0c4a6e] text-white ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-4">
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-6xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-1">
          <img
            src={Portrait}
            alt="Logo img"
            style={{ width: "500px" }}
            className="rounded-xl"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          />

          <p className="lg:text-2xl sm:text-xs">
            Looking for top-quality construction services for your residential
            or commercial property? Look no further than MRG Construction
            Services. Our skilled professionals provide reliable and efficient
            solutions that are specifically designed to withstand the extreme
            weather conditions in Texas. With affordable pricing that fits your
            budget, trust us to deliver high-quality work that exceeds your
            expectations. Choose MRG Construction Services for all your
            construction needs, and experience the difference of our top-notch
            services.
          </p>
        </div>
      </div>
    </div>
  );
}
