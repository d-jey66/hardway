import { Clock, Mail, MapPin, Phone } from "lucide-react";


export default function Location() {
  return (
    <div className="bg-gray-950 py-46 flex items-center overflow-hidden w-screen flex-col px-1 lg:flex-row gap-5 justify-center border-t-2 border-gray-900">
      <div className="h-120 max-w-120 w-full rounded-2xl border-2 border-gray-800 bg-gray-950 md:h-150 md:w-150 md:max-w-150">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.4102833691836!2d44.82064333477455!3d41.797921235106976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c47540d81eb%3A0x5f12b3b5ec245607!2z4YOg4YOX4YOj4YOa4YOYIOGDkuGDluGDkA!5e0!3m2!1ska!2sge!4v1781304233719!5m2!1ska!2sge" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-2xl"></iframe>
      </div>
      
      <div className="h-120 max-w-120 w-full flex flex-col rounded-2xl border-2 border-gray-800 bg-gray-950 p-8 md:max-w-150 gap-10 justify-center md:h-150 md:w-150">
        <div className="text-3xl text-white tracking-tight">
          <h1>დაგვიკავშირდი ან გვესტუმრე</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-3 juftify-center items-center">
            
            <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg text-white">
              <MapPin />
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold">მისამართი</p>
              <p className="text-gray-400 opacity-75">35a ომარ ხიზანიშვილის ქუჩა, თბილისი</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 juftify-center items-center">
            
            <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg text-white">
              <Phone />
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold">ტელ. ნომერი</p>
              <p className="text-gray-400 opacity-75">599041825</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 juftify-center items-center">
            
            <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg text-white">
              <Mail />
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold">მეილი</p>
              <p className="text-gray-400 opacity-75">hardwaygym@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 juftify-center items-center">
            
            <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg text-white">
              <Clock />
            </div>
            
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold">გახსნის საათები</p>
              <div className="flex flex-col gap-0.5">
                <p className="text-gray-400 opacity-75">ორშაბათი - კვირა</p>
                <p className="text-gray-400 opacity-75">08:00 - 24:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
