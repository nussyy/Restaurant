import React from 'react';

const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
      <img src={feature.image} alt={feature.title} />
    </div>
  );
};

export default Feature;
