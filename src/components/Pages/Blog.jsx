import React from "react";
import Frame from "../../assets/Team/Abstract Design.png";
import icon1 from "../../assets/Team/Icon.png";
import { BlogPage } from "../common/constent";
import CTABtn from '../common/Buttton'

export default function Blog() {
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
              Meet Our Team of Experts
            </h1>
            <p className="text-base font-medium text-[#333] px-5">
              Welcome to the Blog section of Nutritionist, your trusted source
              for insightful articles, tips, and expert advice on nutrition and
              wellness. Here, we strive to provide you with engaging and
              informative content that will inspire and empower you to make
              informed decisions about your health. Explore our blog to discover
              a wealth of resources that cover a wide range of topics related to
              nutrition, fitness, and overall well-being.
            </p>
          </div>

          <div className="flex items-center justify-between mt-10 bg-[#234338] p-5 text-[#fff] rounde-xl">
            <span className="bg-[#2C5446]  py-1 px-5 rounded-sm border border-[#356554]">
              All
            </span>
            <span>Weight Loss Tips</span>
            <span>Healthy Eating</span>
            <span>Fitness and Exercise</span>
            <span>Mindset and Motivation</span>
            <span>Recipes and Meal Planning</span>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-2">
            {
              BlogPage.map((blogPage) => (
                <div>
                  <div className="p-5">
                    <span className=" border-b-2 border-b-[#CBEA7B] py-1 font-semibold ">{blogPage.heading}</span>
                    <div className="py-3">
                      <img src={blogPage.image} alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5 md:items-center md:flex-row">
                      <div className="md:max-w-[70%]">
                      <h2 className="py-3 text-xl font-semibold">{blogPage.subHeading}</h2>
                      <p>{blogPage.desc}</p>
                      </div>
                      <div className=" md:w-[30%}">
                        <CTABtn children={"Read More"} active={true} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
