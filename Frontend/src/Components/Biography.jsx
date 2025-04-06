import React from 'react';

const Biography = ({ imageUrl }) => {
    return (
      <div className="Container Biography">
        <div className="banner">
          <img src={imageUrl} alt="WhoWeAre" />
        </div>
        <div className="banner">
          <p>BioGraphy</p>
          <h3>Know About Us</h3>
          <p>
            Welcome to Soham Medicare, where we believe healthcare is more than
            just a service. It's a commitment to improving lives. Our expert team
            combines innovation, compassion, and precision to deliver exceptional
            medical care tailored to your needs.
          </p>
          <p>
            At Soham Medicare, we are embracing the future of healthcare in 2024,
            redefining patient care with cutting-edge technology and a
            patient-first approach.
          </p>
          <p>
            Our dedicated team is working tirelessly on delivering state-of-the-art
            healthcare solutions, blending modern tools and a human touch to
            create a seamless experience for everyone.
          </p>
          <p>
            From advanced diagnostic tools to personalized treatment plans, we are
            here to ensure every step of your healthcare journey is guided by
            care, expertise, and trust. At Soham Medicare, your well-being is our
            priority.
          </p>
          <p>
            We are on a mission to revolutionize healthcare with a focus on
            innovation, collaboration, and excellence. Together, we aim to build a
            healthier tomorrow for communities everywhere.
          </p>
          <p>Because at Soham Medicare, care isn't just our profession—it's our passion!</p>
        </div>
      </div>
    );
  };
  
export default Biography