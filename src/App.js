import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Apropos from './pages/A-propos/A-propos';
import AntreConnaissance from './pages/AntreConnaissance/AntreConnaissance';
import EntreConnaissance from './pages/EntreConnaissance/EntreConnaissance';
import Contact from './pages/Contact/Contact';
import Error404 from './pages/Error404/Error404';
import Evenements from './pages/Event/Event';
import ArtEtSpiritualite from './pages/PageEvenement/ArtEtSpiritualiteMars/ui/ArtEtSpiritualiteMars';
import RencontreSpirituelleFeminine from './pages/PageEvenement/RencontreSpirituelleFeminine/RencontreSpirituelleFeminine';
import CyclePhilosophique from './pages/PageEvenement/CyclePhilosophique/ui/CyclePhilosophique';


//import Evenements from './pages/Evenements/Evenements';
//import MawlidAnNabi from './pages/Mawlid/Mawlid-An-Nabi';


import './App.css';
import PageEvenementAlaUne from './pages/PageEvenement/PageEvenementAlaUne';
import PageEvenementIntroductionAlaMeditationSoufie from './pages/PageEvenement/PageEvenementIntroductionAlaMeditationSoufie/PageEvenementIntroductionAlaMeditationSoufie';
import { Analytics } from "@vercel/analytics/react"
import ScrollToTopButton from "./components/ScrollButton/ScrollButton";


function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a propos" element={<Apropos />} />
        <Route path="/event" element={<Evenements />} />
        <Route path="/antreConnaissance" element={<AntreConnaissance />} />
        <Route path="/entreConnaissance" element={<EntreConnaissance />} />
        <Route path="/pageEvenementAlaUne" element={<PageEvenementAlaUne />} />
        <Route path='/pageEvenementIntroductionAlaMeditationSoufie' element={<PageEvenementIntroductionAlaMeditationSoufie />} />
        <Route path='/artEtSpiritualite' element={<ArtEtSpiritualite />} />
        <Route path="//rencontreSpirituelleFeminine" element={<RencontreSpirituelleFeminine />} />
        <Route path="/cyclePhilosophique" element={<CyclePhilosophique />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<Error404 />} />
    </Routes>
    <Analytics/>
    <ScrollToTopButton/>
    </div>
  );
}

export default App;
