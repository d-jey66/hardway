import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP)

export default function Pricing() {
  
  const [isStudent, setIsStudent] = useState(false)
  const ageSwitch = useRef(null)
  const isFirstRender = useRef(true)
  
  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    
    if (isStudent) {
      gsap.to(ageSwitch.current, {
        x: "162px",
        duration: .5
      })
    } else {
      gsap.to(ageSwitch.current, {
        x: "0px",
        duration: .5
      })
    }
  }, { dependencies: [isStudent] })
  
  return (
    <div className="w-full h-150 flex flex-col p-10 gap-5 items-center border-t-2 border-gray-900">
      <h1 className="text-3xl text-white font-black">ფასები</h1>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between w-60 text-white font-semibold">
          <span>ზრდასრული</span>
          <span>სტუდენტი</span>
        </div>
        <div className="bg-gray-900 w-60 rounded-full h-10 border-gray-800 border shadow-sm shadow-gray-900 p-1">
          <div className="rounded-full bg-yellow-300 h-full w-[30%] hover:cursor-pointer" onClick={() => setIsStudent(!isStudent)} ref={ageSwitch}></div>
        </div>
        {isStudent === true ? <p className="text-white">student 110gel</p> : <p className="text-white">adult 120gel</p>}
      </div>
    </div>
  );
}
