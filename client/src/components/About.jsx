import { Clock, Dumbbell, MapPin } from "lucide-react";

export default function Why() {
  return (
    <div className="py-40 px-2 flex items-center justify-center overflow-hidden w-screen flex-col gap-5">
      <div className="flex flex-row gap-2">
        <h1 className="text-yellow-300 text-4xl md:text-6xl font-black">რატომ</h1>
        <h1 className="text-yellow-300 text-4xl md:text-6xl font-black">HardWay?</h1>
      </div>
      
      <div className="text-center">
        <p className="text-white">ჩვენს დარბაზში თქვენ ივარჯიშებთ პრემიუმ ტრენაჟორებზე. </p>
        <p className="text-white">ჩვენ ასევე გვყავს გამოცდილი ტრენერები რომლებიც დაგეხმარებიან ფორმაში ჩაჯდომაში და ა.შ.</p>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
            <div className="p-5 h-42 flex w-100 max-w-full items-center justify-center gap-3 bg-gray-950 flex-col text-white border border-gray-800 rounded-lg hover:scale-101 duration-100">
              <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg">
                <Dumbbell />
              </div>
              <div className="flex flex-col text-center font-semibold tracking-tight">
                <p className="text-white">პრემიუმ ტრენაჟორები</p>
                <p className="text-gray-400 opacity-75 text-xs">მაღალი ხარისხის სპორტული ინვენტარი</p>
              </div>
            </div>
          
            <div className="p-5 h-42 flex w-100 max-w-full items-center justify-center gap-3 bg-gray-950 flex-col text-white border border-gray-800 rounded-lg hover:scale-101 duration-100">
              <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg">
                <Clock />
              </div>
              <div className="flex flex-col text-center font-semibold tracking-tight">
                <p className="text-white">მორგებული საათები</p>
                <p className="text-gray-400 opacity-75 text-xs">ღია ყოველ დღე 8:00-დან 24:00-მდე. მობრძანდით ნებისმიერ დროს</p>
              </div>
            </div>
          
            <div className="p-5 h-42 flex w-100 max-w-full items-center justify-center gap-3 bg-gray-950 flex-col text-white border border-gray-800 rounded-lg hover:scale-101 duration-100">
              <div className="p-1 flex justify-center items-center text-center bg-gray-900 w-15 h-15 border border-gray-800 rounded-lg">
                <MapPin />
              </div>
              <div className="flex flex-col text-center font-semibold tracking-tight">
                <p className="text-white">კარგი ლოკაცია</p>
                <p className="text-gray-400 opacity-75 text-xs">დარბაზი მდებარეობს გლდანის მთავარ ქუჩაზე, მარტივად მისაღწევი ტრანსპორტით, ფეხით და მანქანით</p>
              </div>
            </div>
          </div>
    </div>
  );
}
