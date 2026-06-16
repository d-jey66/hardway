import { Menu } from 'lucide-react'
import { forwardRef } from 'react'


const Navbar = forwardRef(({ className, openMenu }, ref) => {
  
  return (
    <div ref={ref} className={` ${className} h-24 w-full bg-gray-900 flex px-10 flex-row py-8 justify-between md:px-20 lg:px-40 items-center shadow-md shadow-gray-900 relative`}>
      <h1 className="text-yellow-200 italic font-black text-2xl tracking-tight">HardWay</h1>
      <ul className="flex-row gap-5 text-white text-lg font-semibold hidden lg:flex">
        <li className="hover:text-xl duration-200 tracking-tight">მთავარი</li>
        <li className="hover:text-xl duration-200 tracking-tight">ჩვენს შესახებ</li>
        <li className="hover:text-xl duration-200 tracking-tight">ფასები</li>
        <li className="hover:text-xl duration-200 tracking-tight">ტრენერები</li>
      </ul>
      <Menu className="block lg:hidden hover:text-gray-500 text-white transition-colors" size={26} onClick={openMenu} />
    </div>
  )
})

export default Navbar;