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
      </div>
      <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-evenly w-full">
        <div className="h-full p-5 rounded-xl flex flex-col gap-3 w-full bg-gray-900 border border-gray-800">
          <div className="flex flex-col w-full gap-0.5 text-left font-semibold">
            <h1 className="text-white tracking-tight">დღის პასი</h1>
            <span className="text-gray-400 opacity-75 text-sm">ერთჯერადად შესვლა</span>
          </div>
          {isStudent ? <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">10</span>
              <span className="text-lg font-semibold mt-auto">₾/დღე</span>
          </div> : <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">10</span>
              <span className="text-lg font-semibold mt-auto">₾/დღე</span>
          </div>}
        </div>
        <div className="h-full p-5 rounded-xl flex flex-col gap-3 w-full bg-gray-900 border border-gray-800">
          <div className="flex flex-col w-full gap-0.5 text-left font-semibold">
            <h1 className="text-white tracking-tight">2 კვირიანი ულიმიტო</h1>
            <span className="text-gray-400 opacity-75 text-sm">2 კვირა 8:00 - 00:00 ნებისმიერ დროს</span>
          </div>
          {isStudent ? <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">80</span>
              <span className="text-lg font-semibold mt-auto">₾/2კვირა</span>
          </div> : <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">90</span>
              <span className="text-lg font-semibold mt-auto">₾/2კვირა</span>
          </div>}
        </div>
        <div className="h-full p-5 rounded-xl flex flex-col gap-3 w-full bg-gray-900 border border-gray-800">
          <div className="flex flex-col w-full gap-0.5 text-left font-semibold">
            <h1 className="text-white tracking-tight">1 თვე დილის</h1>
            <span className="text-gray-400 opacity-75 text-sm">1 თვე 8:00 - 16:00 ნებისმიერ დროს</span>
          </div>
          {isStudent ? <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">90</span>
              <span className="text-lg font-semibold mt-auto">₾/თვე</span>
          </div> : <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">100</span>
              <span className="text-lg font-semibold mt-auto">₾/თვე</span>
          </div>}
        </div>
        <div className="h-full p-5 rounded-xl flex flex-col gap-3 w-full bg-gray-900 border border-gray-800">
          <div className="flex flex-col w-full gap-0.5 text-left font-semibold">
            <h1 className="text-white tracking-tight">1 თვე ულიმიტო</h1>
            <span className="text-gray-400 opacity-75 text-sm">30 დღე 8:00 - 00:00 ნებისმიერ დროს</span>
          </div>
          {isStudent ? <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">110</span>
              <span className="text-lg font-semibold mt-auto">₾/თვე</span>
          </div> : <div className="flex gap-0.5 text-white">
              <span className="font-bold text-2xl tracking-tight mt-auto">125</span>
              <span className="text-lg font-semibold mt-auto">₾/თვე</span>
          </div>}
        </div>
      </div>
    </div>
  );
}
