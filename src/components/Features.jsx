import React from 'react'
import { FeatureCard } from "../components/common/constent";

export default function Features() {
  return (
    <div>
      <div>
        <div className="relative grid grid-cols-1 gap-3 py-10 md:grid-cols-2">
          {FeatureCard.map((feature) => {
            return (
              <div className="bg-[#F6FBE9]  rounded-xl py-5 px-4 border border-[#E5F5BD] ">
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#CBEA7B] p-2 rounded">
                    <img src={feature.icon} alt="" className="w-[38px] h-[36px]" />
                    </div>
                  <span className="text-lg font-semibold">{feature.title}</span>
                </div>
                <div>
                  <p className="py-2 text-[#333] ">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  )
}
