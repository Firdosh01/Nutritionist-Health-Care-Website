import React, { useState } from "react";
import Frame from "../../assets/Home/Frame 2608168.png";
import Nutritionist from "../../assets/Home/Nutritionist.png";
import { navigation } from "./constent";
import { Link, NavLink } from "react-router-dom";
import CTABtn from "../common/Buttton";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-[#1A3129]">
      <div>
        <div className="relative flex items-center justify-between gap-5 py-2">
          <Link to="/">
            <div className="flex items-center gap-2 pl-5">
              <img src={Frame} alt="" className="w-[45px] h-[45px]" />
              <img
                src={Nutritionist}
                alt=""
                className="w-[140px] h-[16px]"
                loading="lazy"
              />
            </div>
          </Link>

          <div className="items-center hidden gap-3 pr-5 md:flex">
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
            </ul>
            <Link to={"/contact"}>
              <CTABtn children={"Contact Us"} active={true} />
            </Link>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="z-20 pr-5 text-3xl text-[#DCF1A7] cursor-pointer md:hidden"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </div>

          {/* <div> */}
            {nav && (
              <ul
                className={` fixed top-0 ${
                  nav ? "right-0 " : "-right-[100%]"
                }  z-10 flex flex-col items-center w-full h-screen py-[60px] px-[30px] gap-3 bg-white justify-center `}
              >
                {navigation.map((nav) => {
                  return (
                    <li
                      className="text-3xl font-medium text-black"
                      key={nav.id}
                    >
                      <Link onClick={() => setNav(!nav)} to={nav.link} smooth duration={500}>{nav.nav}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
