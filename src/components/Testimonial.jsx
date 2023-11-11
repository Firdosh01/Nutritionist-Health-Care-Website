import React, { useState } from "react";
import { TestimonialCard } from "../components/common/constent";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? TestimonialCard.length - 2 : prevSlide - 1
    );
  };
  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % TestimonialCard.length);
  };

  return (
    <div>
      <div>
        {/* ---------------large screen view------------  */}
        <div className="hidden grid-cols-3 gap-5 py-5 sm:grid ">
          {TestimonialCard.slice(currentSlide, currentSlide + 3).map(
            (Testimonial, index) => (
              <div key={index} className="px-3 py-2 bg-[#F6FBE9] rounded-xl border border-[#EEF8D3]" data-aos="zoom-in-left">
                <div className="flex flex-col">
                  <img src={Testimonial.icon} alt="" className=" w-[30px]" />
                  <p className="py-4 text-xs">{Testimonial.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={Testimonial.img} alt="" className="w-[35px]" />
                  <span className="text-sm font-semibold">
                    {Testimonial.name}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
        {/* ----------Small screen view--------- */}
        <div className="grid grid-cols-1 gap-5 py-5 sm:hidden">
          {TestimonialCard.slice(currentSlide, currentSlide + 1).map(
            (Testimonial) => (
              <div className="px-3 py-2 bg-[#F6FBE9] rounded-2xl border border-[#EEF8D3]"  data-aos="zoom-in-left">
                <div className="flex flex-col">
                  <img src={Testimonial.icon} alt="" className=" w-[30px]" />
                  <p className="py-4 text-xs">{Testimonial.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={Testimonial.img} alt="" className="w-[35px]" />
                  <span className="text-sm font-semibold">
                    {Testimonial.name}
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex items-center justify-center gap-10 mt-5 ">
          <div
            className="text-3xl cursor-pointer bg-[#F6FBE9] rounded p-1 border border-[#EEF8D3]"
            onClick={handlePrevClick}
          >
            <AiOutlineLeft />
          </div>
          <div
            className="text-3xl cursor-pointer bg-[#F6FBE9] rounded p-1 border border-[#EEF8D3]"
            onClick={handleNextClick}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
}
