import React from "react";
import { BlogCard } from "../components/common/constent";

export default function HomeBlog() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-2">
          {BlogCard.map((blog) => {
            return (
              <div className="flex flex-col bg-[#F6FBE9] overflow-hidden rounded-xl border border-[#E5F5BD] ">
                <div>
                  <img src={blog.img} alt="" />
                </div>
                <div className="px-4 py-5 ">
                  <div>
                    <span>{blog.text}</span>
                    <h3 className="text-xl font-semibold">{blog.heading}</h3>
                    <p className="py-4">{blog.desc}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between bg-[#FAFDF2] border border-[#EEF8D3] px-3 rounded py-2">
                      <div className="flex items-center gap-2">
                        <img src={blog.icon} alt="" />
                        <div>
                          <span>{blog.name}</span>
                          <p>{blog.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={blog.loveIcon} alt="" />
                        <img src={blog.cart} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
