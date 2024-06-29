import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher ou masquer le bouton en fonction de la position de défilement
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
<i className="fa-solid fa-angle-up"></i>
    </div>
  );
}

export default ScrollToTopButton;