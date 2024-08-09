import React from 'react';

const HelloAssoWidget = () => {
  return (
    <>
      <h3 className="font-semibold">Étape 1 :</h3>
      <iframe
        id="haWidget"
        title="HelloAsso Event Widget"
        scrolling="none"
        src="https://www.helloasso.com/associations/l-antre-connaissance/evenements/rencontre-festive/widget"
        style={{
          width: "100%",
          height: "1600px",
          border: "none",
          marginBottom: "0"  
        }}
      />
    </>
  );
};

export default HelloAssoWidget;
