import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import HeroImage from '../assets/Hero.png'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const container = useRef(null)
  const Hard = useRef(null)
  const Way = useRef(null)
  const heroDesc = useRef(null)
  
  useGSAP(() => {
    const tl = gsap.timeline()
    
    tl.from(Hard.current, {
      x: "-60vw",
      duration: 0.5,
      ease: "power4.in"
    })
    .from(Way.current, {
      x: "60vw",
      duration: 0.5,
      ease: "power4.in"
    })
      .from(heroDesc.current, {
        opacity: 0
    })
  }, {scope: container})
  
  return (
    <div ref={container} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HeroImage} alt="HardWay Gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80 pointer-events-none"/>
      </div>
      <div className="max-w-4xl min-h-full z-10 relative flex flex-col items-center justify-center gap-5">
        <div className="text-yellow-300 flex flex-row font-black italic text-[60px]">
          <h1 ref={Hard}>Hard</h1>
          <h1 ref={Way}>Way</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center" ref={heroDesc}>
          <p className="text-gray-400 text-xl font-semibold opacity-75 ">Experience the finest gym in the town.With Premium Equipment,</p>
          <p className="text-gray-400 text-xl font-semibold opacity-75">Great atmosphere and unforgettable Workouts.</p>
        </div>
        <div className="flex flex-row gap-5 md:gap-10">
          <button className="p-3 text-lg font-semibold text-yellow-300 bg-gray-900 rounded-lg w-35">
            <span>Learn More</span>
          </button>
          
          <button className="p-3 text-lg font-semibold text-yellow-300 bg-gray-900 rounded-lg w-35">
            <span>Pricing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
