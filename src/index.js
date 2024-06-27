import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer"


import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
    <App className="container"/>
  <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);


