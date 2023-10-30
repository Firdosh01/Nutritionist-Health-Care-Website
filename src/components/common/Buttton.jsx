import React from 'react'

export default function Button({children,active}) {
  return (
    <div>
        <button className={` ${active ? "bg-[#CBEA7B]  font-semibold py-2 px-5 rounded text-[#000] w-full" : "text-[#000] border border-[#CBEA7B] rounded py-2 px-5 font-semibold"}`}>
            {children}
        </button>
    </div>
  )
}
