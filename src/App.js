import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Apropos from './pages/A-propos/A-propos';
import Evenements from './pages/Evenements/Evenements';
import AntreConnaissance from './pages/AntreConnaissance/AntreConnaissance';
import EntreConnaissance from './pages/EntreConnaissance/EntreConnaissance';
import Contact from './pages/Contact/Contact';
import Error404 from './pages/Error404/Error404';


import './App.css';
import PageEvenement from './pages/PageEvenement/PageEvenement';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a propos" element={<Apropos />} />
        <Route path="evenements" element={<Evenements />} />
        <Route path="/antreConnaissance" element={<AntreConnaissance />} />
        <Route path="/entreConnaissance" element={<EntreConnaissance />} />
        <Route path="/pageEvenement" element={<PageEvenement />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<Error404 />} />
    </Routes>
    <Analytics/>
    </div>
  );
}

export default App;
