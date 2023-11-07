import React from 'react'
import Frame from "../../assets/Team/Abstract Design.png";
import icon1 from "../../assets/Team/Icon.png";
import callIcon from "../../assets/Icons/call Icon.png";
import addressIcon from "../../assets/Icons/address Icon.png";
import mailIcon from "../../assets/Icons/mail Icon.png";

export default function Contact() {
  return (
    <div>
              <div className="w-11/12 max-w-screen-xl px-5 py-10 mx-auto">
        <div className="bg-[#F6FBE9]  rounded-xl border border-[#E5F5BD] overflow-hidden">
          <div className="flex items-center justify-center mt-5">
            <div className="relative ">
              <div>
                <img src={Frame} alt="" />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#CBEA7B] p-2 rounded-xl">
                <img src={icon1} alt="" />
              </div>
            </div>
          </div>

          <div className="text-center ">
            <h1 className="py-2 text-5xl font-semibold ">
            Contact Us
            </h1>
            <p className="text-base font-medium text-[#333] px-5">
            We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods
            </p>
          </div>

          <div className="flex items-center justify-center mt-10 bg-[#1A3129]  gap-5 p-5 text-[#fff] rounde-xl">
          <div className='flex flex-col  p-7 bg-[#234338] items-center justify-center border-2 border-[#2C5446] rounded-md'>
                <img src={mailIcon} alt="" className='w-[34px]' />
                <span>support@nutritionist.com</span>
            </div>
            <div className='flex flex-col items-center p-7 bg-[#234338] justify-center border-2 border-[#2C5446] rounded-md'>
                <img src={callIcon} alt=""  className='w-[34px]'/>
                <span>+91 00000 00000</span>
            </div>
            <div className='flex flex-col items-center p-7 bg-[#234338] justify-center border-2 border-[#2C5446] rounded-md'>
                <img src={addressIcon} alt="" className='w-[34px]' />
                <span>Some Where in the World</span>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
