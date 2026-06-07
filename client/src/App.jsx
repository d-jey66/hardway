import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidemenu = useRef(null);
  const isFirstRender = useRef(true)

  useGSAP(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false
      gsap.set(sidemenu.current, {
        x: "100%"
      });
    } else if (menuOpen === true) {
      gsap.to(sidemenu.current, {
        x: 0,
        duration: 2,
      });
    } else {
      const currentXPercent = gsap.getProperty(sidemenu.current, "translateX", "%");
      if (currentXPercent !== 100) {
        gsap.to(sidemenu.current, {
          x: "100%",
          duration: 2,
        });
      }
    }
  }, { dependencies: [menuOpen] });

  return (
    <div className="w-screen h-screen bg-gray-950">
      <Navbar openMenu={() => setMenuOpen(true)} className="z-10" />

      <div className="w-full h-full flex justify-end">
        <SideMenu
          className="sidemenu z-20"
          
          closeMenu={() => setMenuOpen(false)}
          ref={sidemenu}
        />
      </div>
    </div>
  );
}

export default App;
