import React from "react";
import Frame from "../../assets/Team/Abstract Design.png";
import icon1 from "../../assets/Team/Icon.png";
import {ProcessObj} from '../common/constent'
import SubFooter from "../common/SubFooter";

export default function Process() {
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
              Your Journey to Health and Wellness
            </h1>
            <p className="text-base font-medium text-[#333] px-5 py-5">
              At Nutritionist, we believe in providing a personalized and
              comprehensive approach to help you achieve your health and
              wellness goals. Our "How it Works" process is designed to guide
              you through each step of your journey, ensuring that you receive
              the support, knowledge, and tools you need to succeed. Here's a
              detailed breakdown of our process:
            </p>
          </div>
        </div>

        <div className="px-4 py-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="py-2 text-5xl font-semibold ">How It Works</h1>
            <p className="text-base font-medium text-[#333] max-w-[800px]">
              We provide a step-by-step guide on how to get started on your
              journey towards better health and nutrition. We are here to
              simplify the process and make it easy for you to navigate our
              platform and access the resources you need to achieve your goals.
              Here's how it works
            </p>
          </div>
          {/* <Achievements /> */}
          <div className="grid items-center grid-cols-1 gap-5 py-10 md:grid-cols-2 ">
            {ProcessObj.map((proces) => {
              return (
                <>
                  <div>
                    <div className="z-0 ">
                      <h1 className="text-8xl text-[#468671] font-semibold  z-10 ">
                        {proces.num}
                      </h1>
                      <div className="-mt-10 bg-[#F6FBE9] p-5 z-20 rounded-xl">
                        <div className="flex items-center gap-2 py-5">
                          <div className="bg-[#CBEA7B] rounded p-2">
                            <img src={proces.icon} alt="" />
                          </div>
                          <span>{proces.title}</span>
                        </div>
                        <p>{proces.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <SubFooter
            title={
              "Are you ready to embark on a transformative journey towards better health and wellness?"
            }
            desc={
              "Join us at Nutritionist and let us guide you on the path to a healthier and happier you."
            }
            btnText={"Join Us Now"}
          />
        </div>
      </div>
    </div>
  );
}
