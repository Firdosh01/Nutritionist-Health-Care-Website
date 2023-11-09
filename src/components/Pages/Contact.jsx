import React from "react";
import Frame from "../../assets/Team/Abstract Design.png";
import icon1 from "../../assets/Team/Icon.png";
import callIcon from "../../assets/Icons/call Icon.png";
import addressIcon from "../../assets/Icons/address Icon.png";
import mailIcon from "../../assets/Icons/mail Icon.png";
import CTABtn from '../common/Buttton'
import SubFooter from '../common/SubFooter'

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
            <h1 className="py-2 text-5xl font-semibold ">Contact Us</h1>
            <p className="text-base font-medium text-[#333] px-5">
              We value your feedback, questions, and concerns at Nutritionist.
              Our dedicated team is here to assist you and provide the support
              you need on your nutritional journey. Please don't hesitate to
              reach out to us using any of the following contact methods
            </p>
          </div>

          <div className="flex items-center justify-center mt-10 bg-[#1A3129]  gap-5 p-5 text-[#fff] rounde-xl">
            <div className="flex flex-col  p-7 bg-[#234338] items-center justify-center border-2 border-[#2C5446] rounded-md">
              <img src={mailIcon} alt="" className="w-[34px]" />
              <span>support@nutritionist.com</span>
            </div>
            <div className="flex flex-col items-center p-7 bg-[#234338] justify-center border-2 border-[#2C5446] rounded-md">
              <img src={callIcon} alt="" className="w-[34px]" />
              <span>+91 00000 00000</span>
            </div>
            <div className="flex flex-col items-center p-7 bg-[#234338] justify-center border-2 border-[#2C5446] rounded-md">
              <img src={addressIcon} alt="" className="w-[34px]" />
              <span>Some Where in the World</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F6FBE9] p-20 rounded-xl border border-[#E5F5BD] my-9 flex md:flex-row flex-col justify-between gap-12">
          <form className="flex flex-col gap-7 w-[100%] md:w-[50%]">
            <div className="flex flex-col md:flex-row gap-7">
              <div className="flex flex-col">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Enter your Name"
                  className="w-full p-6 rounded-lg outline-none border border-[#DCF1A7] bg-[#EEF8D3]  select-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Name">Email</label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Enter your Email"
                  className="w-full p-6 rounded-lg outline-none border border-[#DCF1A7] bg-[#EEF8D3] select-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="PhoneNo">Phone Number</label>
              <input
                type="text"
                name="PhoneNo"
                id="PhoneNo"
                placeholder="Enter your Number"
                className="w-full p-6 rounded-lg outline-none border border-[#DCF1A7] bg-[#EEF8D3] select-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="5"
                placeholder="Enter your Message"
                maxLength={250}
                className="w-full p-6 resize-none rounded-lg outline-none border border-[#DCF1A7] bg-[#EEF8D3] select-none flex"
              ></textarea>
            </div>
            <CTABtn children={"Send Message"} active={true} />
          </form>

          <div className="md:w-[50%] w-[100%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484692.85637829395!2d76.76835499514529!3d28.63698185956627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1699440745243!5m2!1sen!2sin"
              // width="500"
              // height="350"
              // style="border:0;"
              className="w-[100%] h-[100%]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
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
  );
}
