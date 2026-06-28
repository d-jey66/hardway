import { X } from "lucide-react";
import { forwardRef } from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const navItems = ["Home", "About", "Prices", "Trainers"];

const SideMenu = forwardRef(({ className, closeMenu }, ref) => {
  return (
    <div
      ref={ref}
      className={`${className} w-[78%] max-w-xs h-screen flex flex-col fixed right-0 top-0 border-l border-white/5`}
      style={{ background: "linear-gradient(160deg, #0d1623 0%, #0a1020 100%)" }}
    >
      <div className="flex items-center justify-between px-6 pt-7 pb-6 border-b border-white/5">
        <div>
          <span className="text-yellow-200 italic font-black text-2xl tracking-tight">HardWay</span>
        </div>
        <button
          onClick={closeMenu}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-red-400 hover:bg-white/5 transition-all"
          aria-label="Close menu"
        >
          <X size={26} />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-4 pt-5">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="group flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all font-medium text-[15px]"
          >
            <span className="w-1 h-4 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400 transition-colors" />
            {item}
          </a>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="px-5 pb-8 pt-5 border-t border-white/5">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#feda75" />
              <stop offset="25%" stopColor="#fa7e1e" />
              <stop offset="50%" stopColor="#d62976" />
              <stop offset="75%" stopColor="#962fbf" />
              <stop offset="100%" stopColor="#4f5bd5" />
            </linearGradient>
            <linearGradient id="maps-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="33%" stopColor="#EA4335" />
              <stop offset="66%" stopColor="#FBBC05" />
              <stop offset="100%" stopColor="#34A853" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-[11px] uppercase tracking-widest text-gray-600 font-semibold mb-4">Follow us</p>
        <div className="flex gap-3">
          {[
            {
              href: "https://www.facebook.com/hardwaygym/",
              icon: <FaFacebook size="1.4em" className="text-blue-500" />,
              label: "Facebook",
            },
            {
              href: "https://www.instagram.com/hardwaygym/?hl=en",
              icon: <FaInstagram size="1.4em" style={{ fill: "url(#ig-grad)" }} />,
              label: "Instagram",
            },
            {
              href: "https://www.google.com/maps/place/%E1%83%A0%E1%83%97%E1%83%A3%E1%83%9A%E1%83%98+%E1%83%92%E1%83%96%E1%83%90/@41.7986901,44.828291,16z/data=!4m6!3m5!1s0x40446c47540d81eb:0x5f12b3b5ec245607!8m2!3d41.7981492!4d44.8213887!16s%2Fg%2F11c5rs_ksy",
              icon: <FaMapMarkerAlt size="1.4em" style={{ fill: "url(#maps-grad)" }} />,
              label: "Maps",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl bg-white/4 hover:bg-white/8 active:scale-95 transition-all border border-white/5"
              aria-label={label}
            >
              {icon}
              <span className="text-[10px] text-gray-500 font-medium">{label}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-700 font-medium mt-5">
          {new Date().getFullYear()} HardWay Gym
        </p>
      </div>
    </div>
  );
});

export default SideMenu;