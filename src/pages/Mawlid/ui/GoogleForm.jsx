import React from 'react';

const GoogleFormWidget = () => {
  return (
    <>   
    <h3 className="font-semibold mb-2">Etape 2 :</h3>
    <iframe 
    title="Google Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfEhzxy8sX-HUueDBNE4A9BTUqSd_6Z7mZOt8GlZhQIlTVKLA/viewform?embedded=true" 
      scrolling="none"
      style={{
        width: "100%",
        height: "1900px",
        border: "none"
      }}
      
    >
      Chargement…
    </iframe>
    </>
 
  );
};

export default GoogleFormWidget;







