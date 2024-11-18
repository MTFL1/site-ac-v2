import React from "react";
import Hero from './ui/Hero';
import BandeauDon from "../../components/BandeauDon"
import QuiSommesNous from "./ui/QuiSommesNous"
import QueFaisonsNous from "./ui/QueFaisonsNous"
import DernierEvent from "../Event/DernierEvent";


function Accueil() {
  return (
    <div className="flex flex-col pt-4 bg-white">
      <main>
        <Hero/>
        <QuiSommesNous/>
        <QueFaisonsNous/>
        <DernierEvent/>
        <BandeauDon/>
      </main>
    </div>
);
}

export default Accueil;