import React, { useState } from "react";
import Frame from "../../assets/Team/Abstract Design.png";
import icon1 from "../../assets/Team/Icon.png";
import CTABtn from "../common/Buttton";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Faq } from "../common/constent";
import FrameImg from "../../assets/Home/Frame 2608168.png";

export default function Pricing() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div>
      <div className="w-11/12 max-w-screen-xl px-5 mx-auto">
        <div className="bg-[#F6FBE9]  rounded-xl border border-[#E5F5BD] mt-10 overflow-hidden">
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

          <div className="text-center">
            <h1 className="py-2 text-5xl font-semibold">Our Pricing</h1>
            <p className="text-base font-medium text-[#333] px-5 py-4">
              At Nutritionist, we offer flexible pricing options to accommodate
              your unique requirements and budget. Our goal is to provide you
              with exceptional personalized nutrition coaching that is
              accessible and tailored to your needs. Choose from our three plans
              below and take the first step towards a healthier lifestyle
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-5">
          <div className=" border border-[#DCF1A7] rounded p-3 w-fit flex gap-5 items-center">
            <button className="bg-[#234338]  font-semibold py-2 px-5 rounded text-[#ffff]">
              Monthly
            </button>
            <span className="font-semibold">Yearly</span>
          </div>
          <p className="py-5">Save 50% on Yearly</p>
        </div>

        <div className="grid grid-cols-1 gap-5 py-5 lg:grid-cols-3 md:grid-cols-2">
          <div className="bg-[#F6FBE9] rounded-xl p-5 border border-[#DCF1A7]  h-fit">
            <div>
              <h3 className="py-1 text-xl font-semibold">Basic Plan</h3>
              <span className="">Up to 50% off on Yearly Plan</span>
            </div>
            <div className="flex flex-col bg-[#EEF8D3] p-3 rounded-xl mt-3">
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p>
                  Personalized nutrition plan tailored to your goals and dietary
                  preferences.
                </p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p>
                  Access to our mobile app for convenient meal tracking and
                  progress monitoring.
                </p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p>
                  Email support to address your questions and concerns.
                </p>
              </div>
              <div className="py-2">
                <p>
                  Regular check-ins with a dedicated nutritionist to review your
                  progress and provide guidance.
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-5">
              <h3 className="text-xl font-semibold text-[#2C5446]">$49</h3>
              <span>/month</span>
            </div>

            <CTABtn children={"Choose Plan"} active={true} />
          </div>

          <div className="bg-[#F6FBE9] rounded-xl p-5 border border-[#DCF1A7] h-fit">
            <div>
              <h3 className="py-1 text-xl font-semibold">Premium Plan</h3>
              <span className="">Up to 50% off on Yearly Plan</span>
            </div>
            <div className="flex flex-col bg-[#EEF8D3] p-3 rounded-xl mt-3">
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">All the features included in the Basic Plan.</p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">
                  One-on-one video consultations with your dedicated
                  nutritionist for more personalized guidance and support.
                </p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">
                  Recipe recommendations and meal planning assistance.
                </p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">
                  Priority email support for quicker responses to your
                  inquiries.
                </p>
              </div>
              <div className="py-2">
                <p className="">
                  Educational resources and guides to deepen your understanding
                  of nutrition and healthy habits.
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-5">
              <h3 className="text-xl font-semibold text-[#2C5446]">$79</h3>
              <span>/month</span>
            </div>

            <CTABtn children={"Choose Plan"} active={true} />
          </div>

          <div className="bg-[#F6FBE9] rounded-xl p-5 border border-[#DCF1A7]">
            <div>
              <h3 className="py-1 text-xl font-semibold">Ultimate Plan</h3>
              <span className="">Up to 50% off on Yearly Plan</span>
            </div>
            <div className="flex flex-col bg-[#EEF8D3] p-3 rounded-xl mt-3">
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">All the features included in the Plus Plan.</p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">
                  Unlimited access to video consultations with your dedicated
                  nutritionist for ongoing support and accountability.
                </p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">
                  Advanced progress tracking tools to monitor your weight, body
                  measurements, and fitness goals..
                </p>
              </div>
              <div className="py-2 border-b-2 border-b-[#DCF1A7]">
                <p className="">
                  Customized meal plans and recipe suggestions based on your
                  preferences and nutritional needs.
                </p>
              </div>
              <div className="py-2">
                <p className="">
                  Priority email and phone support for immediate assistance.
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-5">
              <h3 className="text-xl font-semibold text-[#2C5446]">$99</h3>
              <span>/month</span>
            </div>

            <CTABtn children={"Choose Plan"} active={true} />
          </div>
        </div>

        <div>
          <div className="text-center ">
            <h1 className="py-2 text-5xl font-semibold ">FAQ</h1>
            <p className="text-base font-medium text-[#333] px-5">
              We address commonly asked questions and provide comprehensive
              answers to help you navigate your way through your nutrition and
              wellness journey.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 py-10 md:flex-row md:items-start ">
            <div className="flex flex-col md:max-w-[65%] max-w-[100%]  bg-[#F6FBE9] p-5 border border-[#E5F5BD] rounded-xl">
              {Faq.map((faq, index) => (
                <div className="flex " key={faq.id}>
                  <div className="py-3">
                    <div className="flex items-center gap-10">
                      <div>
                        <h1 className="md:text-xl font-semibold text-[#262626] ">
                          {faq.title}
                        </h1>
                      </div>
                      <div
                        className="cursor-pointer bg-[#234338] p-2  text-[#fff] rounded"
                        onClick={() => toggle(index)}
                      >
                        {clicked === index ? (
                          <AiOutlineMinus />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </div>
                    </div>
                    <div>
                      {clicked === index && <p className="py-2">{faq.desc}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F6FBE9] border border-[#E5F5BD] rounded-xl w-fit p-5 h-fit flex flex-col justify-center items-center">
              <img src={FrameImg} alt="" className="w-[120px]" />
              <h1 className="text-xl font-semibold text-[#262626] py-3">
                Ask your question
              </h1>
              <p className="py-3">Feel Free to Ask questions on anytime</p>
              <CTABtn children={"Ask A Question"} active={true} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
