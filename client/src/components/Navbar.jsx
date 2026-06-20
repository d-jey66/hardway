import { Menu } from 'lucide-react'
import { forwardRef } from 'react'


const Navbar = forwardRef(({ className, openMenu }, ref) => {
  
  return (
    <div ref={ref} className={` ${className} h-24 w-full bg-gray-900 flex px-10 flex-row py-8 justify-between md:px-20 lg:px-40 items-center shadow-md shadow-gray-900 relative`}>
      <h1 className="text-yellow-300 italic font-black text-2xl tracking-tight">HardWay</h1>
      <ul className="flex-row gap-8 text-white text-lg font-semibold hidden lg:flex">
        <li className="relative cursor-pointer tracking-tight transition-colors duration-200 hover:text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">მთავარი</li>
        <li className="relative cursor-pointer tracking-tight transition-colors duration-200 hover:text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">ჩვენს შესახებ</li>
        <li className="relative cursor-pointer tracking-tight transition-colors duration-200 hover:text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">ფასები</li>
        <li className="relative cursor-pointer tracking-tight transition-colors duration-200 hover:text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">ტრენერები</li>
      </ul>
      <Menu className="block lg:hidden hover:text-gray-500 text-white transition-colors" size={26} onClick={openMenu} />
    </div>
  )
})

export default Navbar;