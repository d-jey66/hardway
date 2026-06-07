import { X } from "lucide-react";
import { forwardRef } from "react";

const SideMenu = forwardRef(({className, closeMenu}, ref) => {
  return (
    <div className={`${className} w-[75%] h-screen flex flex-col bg-gray-100 absolute`} ref={ref}>
      <X onClick={closeMenu}/>
    </div>
  );
})

export default SideMenu