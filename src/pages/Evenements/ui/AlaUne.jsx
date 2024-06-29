import React from "react";
import Flyer4 from "../../../img/Flyer4.jpg"


function AlaUne() {

return(

    <section className="relative py-14">
    <div className="petal absolute inset-0">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-5 left-14 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 bottom-2 ml-14 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 left-1/2 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 top-14 left-0 ml-64 rotate-45 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-52 right-16 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-6 right-1/4 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-24 right-14 aspect-[0.66] fill-teal-300 fill-opacity-20 w-[49px] max-md:mt-10" />
    </div>
  
    <div className="contenu max-w-screen-xl mx-auto md:px-8 relative z-10">
      <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
          <div className="flex items-center space-x-3">
            <span className="block w-10 h-1 bg-cyan-600"></span>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Évènements
          </p>
          </div>
         
          <p className="mt-3 text-gray-600 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.          </p>
          <a href="">
            <button className="flex items-center justify-center gap-x-2 py-3.5 px-8 mt-6 mb-8 text-sm text-white font-bold bg-cyan-600 hover:bg-cyan-700 hover:text-[#f4f3f3] active:bg-[#4f7090] duration-150 rounded-lg sm:mt-6 sm:w-auto">
                En savoir plus
            </button>
          </a>
        </div>
        <div className="flex-1 sm:hidden lg:block">
          <img src={Flyer4} className="md:max-w-lg rounded-lg max-md:w-[90%] max-md:mx-auto" alt="" />
        </div>
      </div>
    </div>
  </section>

)
}

export default AlaUne;