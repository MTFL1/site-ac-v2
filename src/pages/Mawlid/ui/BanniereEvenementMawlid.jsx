import React from "react";
import BrancheLogoFooter from "../../../img/brancheLogoFooter.svg";


function BanniereEvenement()  {
  return (
    <section className="w-full relative justify-center items-center px-16 py-20 bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center text-white mx-auto max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl font-bold text-center max-md:text-2xl max-md:leading-[54px]">
          Mawlid An Nabi ﷺ en présence de Sheikh Abdulaziz Al Amghari
        </h1>
        <div className="mt-10 space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-4">
          <i className="fa-solid fa-calendar text-2xl"></i>            
           <p className="text-base leading-7">14 Septembre 2024, à partir de 18h</p>
          </div>
          <div className="flex items-center space-x-4">
          <i className="fa-solid fa-location-dot text-2xl"></i> 
            <p className="text-base leading-7">Salle Bellagio, Toulouse</p>
          </div>
        </div>
        {/** 
        <div className="mt-10">
          <a href="https://www.helloasso.com/associations/l-antre-connaissance/evenements/rencontre-festive" className="px-6 py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-700 transition duration-150">
            Je m'inscris
          </a>
        </div>*/}
      </div>
      <div className="absolute top-0 left-0 transform rotate-180">
        <img 
          loading="lazy" 
          src={BrancheLogoFooter} 
          alt="motif background" 
          className="w-[150px] aspect-[0.65]" 
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img 
          loading="lazy" 
          src={BrancheLogoFooter} 
          alt="motif background" 
          className="w-[150px] aspect-[0.65]" 
        />
      </div>
    </section>
  );
}

export default BanniereEvenement;