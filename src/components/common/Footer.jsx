import React from "react";
import Nutritionist from "../../assets/Home/Nutritionist.png";
import Frame from "../../assets/Home/Frame 2608168.png";
import { navigation } from ".././common/constent";
import { NavLink } from "react-router-dom";
import arrowTop from "../../assets/Icons/arrow-small-up.png";
import callIcon from "../../assets/Icons/call Icon.png";
import addressIcon from "../../assets/Icons/address Icon.png";
import mailIcon from "../../assets/Icons/mail Icon.png";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
    });
  };
  
  return (
    <footer className="bg-[#1A3129] py-7">
      <div className="w-11/12 max-w-screen-xl px-2 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Frame} alt="" className=" max-w-[20%]" />
            <img src={Nutritionist} alt="" className=" md:max-w-[80%] max-w-[50%]" />
          </div>

          <div className="flex items-center gap-3">
            <ul className="hidden gap-3 md:flex">
              {navigation.map((nav) => {
                return (
                  <li
                    className="flex text-[16px]  font-medium text-[#FAFDF2]"
                    key={nav.id}
                  >
                    <NavLink to={nav.link}>{nav.nav}</NavLink>
                  </li>
                );
              })}
              <li className="text-[16px]  font-medium text-[#FAFDF2]">
                <NavLink to="/Contact">
                Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-1">
            <span className="md:text-[16px] text-[14px]  font-medium text-[#FAFDF2]">
              Got To Top
            </span>
            <div
              className="bg-[#234338] rounded-full p-1  cursor-pointer"
              onClick={scrollToTop}
            >
              <img src={arrowTop} alt="" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 bg-[#234338] rounded-xl p-5 border border-[#2C5446] md:flex-row flex-col">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex items-center gap-1 text-[#fff] border border-[#2C5446] p-3 rounded-md">
              <img src={mailIcon} alt="" />
              <p>hello@squareup.com</p>
            </div>
            <div className="flex items-center gap-1 text-[#fff]  border border-[#2C5446] p-3 rounded-md">
              <img src={callIcon} alt="" />
              <p>+91 00000 00000</p>
            </div>
            <div className="flex items-center gap-1 text-[#fff]  border border-[#2C5446] p-3 rounded-md">
              <img src={addressIcon} alt="" />
              <p>Somewhere in the World</p>
            </div>
          </div>

          <div>
            <p className="text-[#fff] md:mt-0 mt-4">
              © 2023 Nutritionist. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
