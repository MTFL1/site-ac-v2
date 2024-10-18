import React from 'react';

const FormWidget = () => {
  return (
      <iframe
      title="Google Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfIkjPbrHrM4z0QX-1A5BJJ_1faV4yh_b8y6FND2yR79rG_aA/viewform?embedded=true" 
      scrolling="none"
      style={{
        width: "100%",
        height: "1450px",
        border: "none"
        }}
      />
  );
};

export default FormWidget;