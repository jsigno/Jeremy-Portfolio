import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Mrg() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-screen py-20 px-4 relative group bg-[#0c4a6e]">
      <d1v className="pb-10">
        <p className="text-5xl font-bold inline border-b-4 border-green-600 text-white">
          MRG Construction
        </p>
      </d1v>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Mrg;

// import React from "react";

// const Mrg = () => {
//   return (
//     <div name="about" className="w-full h-screen bg-[#0c4a6e] text-white ">
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-4">
//           <div className="sm:text-right pb-4 pl-4">
//             <p className="text-5xl font-bold inline border-b-4 border-green-600">
//               MRG Construction
//             </p>
//           </div>
//         </div>
//         <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-1">
//           <ul className="lg:text-lg pb-5 sm:text-xs">
//             <li className="font-bold">
//               - Skilled Estimators at Your Doorstep
//               <div>
//                 We dispatch certified estimators to your home to assess storm
//                 damages and emergency repairs with precision and expertise.
//               </div>
//             </li>
//             <li className="font-bold">
//               - Storm Restoration Experts
//               <div>
//                 Our team specializes in restoring your property to pre-storm
//                 conditions with prompt and reliable service.
//               </div>
//             </li>
//             <li className="font-bold">
//               - GAF Certified and Owens Corning Preferred
//               <div>
//                 As a GAF certified and Owens Corning preferred roofing
//                 contractor, we ensure top-notch quality and workmanship in all
//                 our roofing projects.
//               </div>
//             </li>
//             <li className="font-bold">
//               - Fully Licensed and Insured Roofing Specialists
//               <div>
//                 Rest assured that you are in safe hands as we are fully licensed
//                 and insured roofing specialists who comply with industry
//                 regulations and safety standards.
//               </div>
//             </li>
//             <li className="font-bold">
//               - Uncompromised Quality and Communication
//               <div>
//                 We take pride in delivering the highest quality of installation,
//                 repair, and maintenance services while keeping you informed at
//                 every step of the way with clear and concise communication. Our
//                 customer-centric approach guarantees your satisfaction.
//               </div>
//             </li>
//           </ul>
//           <div className="flex justify-center items-center">
//             <img src="your-image-url" alt="your-image-alt-text" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mrg;
