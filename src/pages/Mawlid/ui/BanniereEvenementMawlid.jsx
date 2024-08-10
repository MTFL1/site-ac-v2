import React from "react";
import BrancheLogoFooter from "../../../img/brancheLogoFooter.svg";


function BanniereEvenement()  {
  return (
    <section className="w-full relative justify-center items-center px-16 py-20 bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center text-white mx-auto max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl font-bold text-center max-md:text-2xl max-md:leading-[54px]">
          Mawlid An Nabi ﷺ <br /> en présence de <br />Sheikh Abdulaziz Al Amghari 
        </h1>
        <div className="mt-10 space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-4">
          <i className="fa-solid fa-calendar text-2xl"></i>            
           <p className="text-base leading-7">13 au 15 Septembre 2024</p>
          </div>
            <a className="flex items-center space-x-4 bg-cyan-600 px-4 py-1 rounded-lg hover:bg-cyan-700" href="https://www.google.com/maps/dir//Salle+de+r%C3%A9ception+%C3%A0+Toulouse+Bellagio,+77+Imp.+de+Lespinasse,+31140+Aucamville/@43.6745151,1.4104733,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x12aea5448ca44e7d:0x79b09d76468c8c08!2m2!1d1.4130536!2d43.6745112!3e0?entry=ttu">
            <i className="fa-solid fa-location-dot text-2xl"></i> 
            <p className="text-base leading-7 ">Salle Bellagio, Toulouse</p>
            </a>
        </div>
        {/**
        <div className="mt-10">
          <a href="https://www.helloasso.com/associations/l-antre-connaissance/evenements/rencontre-festive" className="px-6 py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-700 transition duration-150">
            Je m'inscris
          </a>
        </div>**/}

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