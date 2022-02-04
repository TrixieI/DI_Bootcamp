import React from 'react';
import "./Feature.css"

function Feature({title, text}) {
  return <div className="port__features-container__feature">
    <div className="port__features-container__feature-title"> 
      <div />
      <h1>{title}</h1>
    </div>
    <div className="port__features-container__feature-text">
      <p>{text}</p>
    </div>
  </div>;
}

export default Feature;
