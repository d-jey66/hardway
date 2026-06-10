import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/Hero";

gsap.registerPlugin(useGSAP);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidemenu = useRef(null);
  const isFirstRender = useRef(true)
  const navbar = useRef(null)

  useGSAP(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false
      gsap.set(sidemenu.current, {
        x: "100%"
      });
    } else if (menuOpen === true) {
      gsap.to(sidemenu.current, {
        x: 0,
        duration: 1,
      });
    } else {
      const currentXPercent = gsap.getProperty(sidemenu.current, "translateX", "%");
      if (currentXPercent !== 100) {
        gsap.to(sidemenu.current, {
          x: "100%",
          duration: 1,
        });
      }
    }
  }, { dependencies: [menuOpen] });
  
  useGSAP(() => {
    gsap.from(navbar.current, {
      y: "-100%"
    })
    gsap.to(navbar.current, {
      y: 0
    })
  })

  return (
    <div className="w-screen h-screen bg-gray-950 overflow-x-hidden">
      <Navbar openMenu={() => setMenuOpen(true)} className="z-10" ref={navbar} />
      <Hero />
      <h1 className="text-white">hello world</h1>
      <div className="w-full h-full flex justify-end">
        <SideMenu
          className="sidemenu z-20 lg:hidden"
          closeMenu={() => setMenuOpen(false)}
          ref={sidemenu}
        />
      </div>
    </div>
  );
}

export default App;
