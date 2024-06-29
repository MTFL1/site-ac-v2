import React from "react";
import Hero from './ui/Hero';
import BandeauDon from "../../components/BandeauDon"
import QuiSommesNous from "./ui/QuiSommesNous"
import QueFaisonsNous from "./ui/QueFaisonsNous"
import ProchainEvent from "./ui/ProchainEvent"
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";
import DernierEvent from "./ui/DernierEvent";



function Accueil() {
  return (
    <div className="flex flex-col pt-4 bg-white">
      <main>
      <Hero/>
      <QuiSommesNous/>
      <QueFaisonsNous/>
      <ScrollToTopButton/>
      <ProchainEvent/>
      <DernierEvent/>
      <BandeauDon/>
</main>
</div>
);
}

export default Accueil;