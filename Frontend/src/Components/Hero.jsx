import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="Hero">
      <div className="banner">
        <h1 className="gradient-text">{title}</h1>
        <p>
          Welcome to <strong>Soham Medicare</strong>, where we combine
          innovation, compassion, and expertise to deliver top-notch healthcare
          services. Our skilled professionals provide personalized care to
          ensure your well-being.
        </p>
        <p>
          Join us at Soham Medicare, where your health is our mission, and
          together, we build a healthier tomorrow.
        </p>
      </div>
      <div className="banner">
        <span className="vector-image">
          <img src="/Vector.png" alt="Vector" />
        </span>
        <img src={imageUrl} alt="Hero" className="animated-image" />
      </div>
    </div>
  );
};

export default Hero;
