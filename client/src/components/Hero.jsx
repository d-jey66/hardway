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
  const left = useRef(null)
  const right = useRef(null)
  
  useGSAP(() => {
    const tl = gsap.timeline()
    
    tl.from(Hard.current, {
      x: "-60vw",
      duration: 0.4,
      ease: "power4.in"
    })
    .from(Way.current, {
      x: "60vw",
      duration: 0.4,
      ease: "power4.in"
    })
      .from(heroDesc.current, {
        opacity: 0
      })
      .from(left.current, {
        opacity: 0,
        x: "-20px",
        y: "-20px",
        duration: 0.5
      })
      .from(right.current, {
        opacity: 0,
        x: "20px",
        y: "-20px",
        duration: 0.5
      })
  }, { scope: container })
  
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
          <p className="text-gray-400 text-xl font-semibold opacity-75 ">გამოსცადე ყველაზე დახვეწილი დარბაზი ქალაქში.პრემიუმ ტრენაჟორებით,</p>
          <p className="text-gray-400 text-xl font-semibold opacity-75">კარგი ატმოსფეროთი და დაუვიწყარი ვარჯიშებით.</p>
        </div>
        <div className="flex flex-row gap-5 md:gap-10">
          <button className="p-3 text-lg font-semibold text-yellow-300 bg-gray-900 rounded-lg w-35 hover:bg-gray-950 hover:text-yellow-400 active:bg-gray-950 active:text-yellow-400" ref={left}>
            <span>გაიგე მეტი</span>
          </button>
          
          <button className="p-3 text-lg font-semibold text-yellow-300 bg-gray-900 rounded-lg w-35 hover:bg-gray-950 hover:text-yellow-400 active:bg-gray-950 active:text-yellow-400" ref={right}>
            <span>ფასები</span>
          </button>
        </div>
      </div>
    </div>
  );
}
