import React from 'react'

export default function Button({children,active}) {
  return (
    <div>
        <button className={` ${active ? "bg-[#CBEA7B]  font-semibold md:py-2 md:px-5 px-2 py-1 rounded text-[#000] w-full" : "text-[#000] border border-[#CBEA7B] rounded md:py-2 md:px-5 px-2 py-1 font-semibold"}`}>
            {children}
        </button>
    </div>
  )
}
