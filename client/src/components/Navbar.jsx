import { Menu } from 'lucide-react'


function Navbar({openMenu}) {
  
  return (
    <div className="w-full bg-gray-900 flex px-10 flex-row py-8 justify-between md:px-20 lg:px-40 items-center shadow-md shadow-gray-900 absolute">
      <h1 className="text-yellow-300 font-bold text-2xl">HARDWAY GYM</h1>
      <ul className="flex-row gap-5 text-white text-lg font-semibold hidden lg:flex">
        <li className="hover:text-xl duration-200">home</li>
        <li className="hover:text-xl duration-200">about</li>
        <li className="hover:text-xl duration-200">prices</li>
        <li className="hover:text-xl duration-200">trainers</li>
      </ul>
      <Menu className="block lg:hidden hover:text-gray-500 text-white transition-colors" size={26} onClick={openMenu} />
    </div>
  );
}

export default Navbar;