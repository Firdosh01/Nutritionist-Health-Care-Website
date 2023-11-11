import React from "react";
import CTABtn from '../common/Buttton'
import Abstract from '../../assets/About/Abstract Design.png'

export default function SubFooter({title, desc, btnText}) {
  return (
    <div className="py-5">
      <div className="flex items-center flex-col md:flex-row justify-between bg-[#F6FBE9] md:py-14 md:px-14 px-8 py-16  mb-5 border border-[#E5F5BD] rounded-xl relative overflow-hidden" data-aos="zoom-in" >
        <div>
          <h3 className="text-lg font-semibold ">{title}</h3>
          <p className=" md:max-w-[90%] py-3">{desc}</p>
        </div>
        <div className="md:w-[25%] md:mt-0 mt-3 w-full ">
          <CTABtn children={btnText} active={true} />
        </div>
        <div className="absolute top-0 -left-5">
          <img src={Abstract} alt="" />
        </div>
      </div>
    </div>
  );
}
