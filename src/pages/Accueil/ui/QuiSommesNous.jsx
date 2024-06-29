import React from "react";
import BG from "../../../img/BG.svg"


function QuiSommesNous() {

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
          <h3 className="text-cyan-600 font-bold">QUI SOMMES NOUS</h3>
        </div>
        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Nous offrons des lieux d'échange et de partage
        </p>
        <p className="mt-3 text-gray-600 text-xl">
          L'antre Connaissance est une association loi 1901, son but principal est de contribuer au développement et à l'épanouissement de l'individu dans toutes ses dimensions : <br />physique, psychologique et spirituelle.
        </p>
        <a href="/a propos" className="inline-flex gap-x-1 py-4 items-center text-cyan-600 hover:text-indigo-500 duration-150 font-medium">
          En savoir plus
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <div className="flex-1 sm:hidden lg:block">
        <img src={BG} className="mb-10 md:max-w-lg rounded-lg max-md:w-[90%] max-md:mx-auto" alt="" />
      </div>
    </div>
  </div>
</section>

)
}

export default QuiSommesNous;