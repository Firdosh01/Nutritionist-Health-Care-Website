import React from "react";
import Frame from "../../assets/Team/Abstract Design.png";
import icon1 from "../../assets/Team/Icon.png";
import mitchell from '../../assets/Team/Image (11).png'
import Emily  from '../../assets/Team/Image (22).png'
import John from '../../assets/Team/Image (23).png'
import Rachel from '../../assets/Team/Image (24).png'
import SubFooter from '../common/SubFooter'
export default function Team() {
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
              Our team at Nutritionist is composed of highly skilled
              professionals who are passionate about helping you achieve your
              health and wellness goals. With a diverse range of expertise in
              nutrition, coaching, and support, our team is dedicated to
              providing you with the guidance and personalized care you need.
              Get to know the experts behind our success and discover how they
              can make a positive impact on your journey to better health.
            </p>
          </div>

          <div className="flex items-center justify-between mt-10 bg-[#234338] p-5 text-[#fff] rounde-xl">
            <span>Management Team</span>
            <span>Nutritionists and Dietitians</span>
            <span>Customer Support</span>
            <span>Marketing and Communications</span>
            <span>Technology and Development</span>
          </div>
        </div>

        <div className="grid items-center gap-12 py-5 md:grid-cols-4 sm:grid-cols-2 md:gap-5" data-aos="zoom-in-up">
          <div className="relative " >
            <img src={mitchell} alt="" />
            <div className=" absolute -bottom-[20px] left-0 bg-[#F6FBE9]  p-5">
              <span className="text-lg font-semibold">Sarah Mitchell</span>
              <p className="text-base font-medium text-[#333]">
                Founder and CEO
              </p>
            </div>
          </div>

          <div className="relative ">
            <img src={Emily} alt="" />
            <div className=" absolute -bottom-[20px] left-0 bg-[#F6FBE9]  p-5">
              <span className="text-lg font-semibold">Emily Thompson</span>
              <p className="text-base font-medium text-[#333]">
                Chief Operating Officer
              </p>
            </div>
          </div>

          <div className="relative ">
            <img src={John} alt="" />
            <div className=" absolute -bottom-[20px] left-0 bg-[#F6FBE9]  p-5">
              <span className="text-lg font-semibold">John Davis</span>
              <p className="text-base font-medium text-[#333]">
                Chief Financial Officer
              </p>
            </div>
          </div>

          <div className="relative ">
            <img src={Rachel} alt="" />
            <div className=" absolute -bottom-[20px] left-0 bg-[#F6FBE9]  p-5">
              <span className="text-lg font-semibold">Rachel Adams</span>
              <p className="text-base font-medium text-[#333]">
                Chief Marketing Officer
              </p>
            </div>
          </div>
        </div>

        <SubFooter
          title={"Join Our Team"}
          desc={
            "We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals."
          }
          btnText={"Apply Now"}
        />
      </div>
    </div>
  );
}
