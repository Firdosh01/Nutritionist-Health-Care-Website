import React from "react";
import Frame from "../../assets/Home/Frame 2608168.png";
import Nutritionist from "../../assets/Home/Nutritionist.png";
import { navigation } from "./constent";
import { Link, NavLink } from "react-router-dom";
import CTABtn from '../common/Buttton'

export default function Navbar() {
  return (
    <div className="bg-[#1A3129]">
      <div className="w-11/12 max-w-screen-xl px-2 mx-auto">
        <div className="flex items-center justify-between py-2">
         
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={Frame} alt="" className="w-[45px] h-[45px]" />
              <img src={Nutritionist} alt="" className="w-[140px] h-[16px] " />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <ul className="hidden gap-3 md:flex">
              {navigation.map((nav) => {
                return (
                  <li className="flex text-[16px]  font-medium text-[#FAFDF2]" key={nav.id}>
                    <NavLink to={nav.link}>{nav.nav}</NavLink>
                  </li>
                );
              })}
            </ul>
            <CTABtn children={"Contact Us"} active={true} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
