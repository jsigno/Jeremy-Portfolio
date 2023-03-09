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
            As an expert from MRG Construction Services, I would like
            to share with you what we do. Our company specializes in providing
            top-notch construction services for both residential and commercial
            properties. We have a team of skilled professionals who are
            dedicated to meeting all of your construction needs. We pride
            ourselves on providing affordable pricing that is sure to fit your
            budget. Our solutions are specifically designed to withstand the
            extreme weather conditions in Texas and are made to last. You can
            trust us to deliver high-quality work that is both reliable and
            efficient. Choose MRG Construction Services for your construction
            needs, and you won't be disappointed.
            
          </p>
        </div>
      </div>
    </div>
  );
}
