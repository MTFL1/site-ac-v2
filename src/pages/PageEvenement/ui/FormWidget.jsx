import React from 'react';

const FormWidget = () => {
  return (
      <iframe
      title="Google Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfvqhYZRHiB3JhDRr0u0PWCNcGpNb9oWP9xciVDHFrjb1LVfA/viewform?embedded=true" 
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
