import React from "react";
//import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
    <div className="hero-left">
      <h1 className="hero-title">Hey, I’m Rajasekhar Reddy.</h1>
      <p className="hero-subtitle">
      I help businesses architect and deploy intelligent, cloud-native Contact Center and IVR solutions with advanced call routing, automation, 
      and omni-channel integration to deliver scalable and high-performance customer engagement platforms.    
      </p>
  
      <div className="hero-buttons">
        {/* Scroll to contact section */}
        <button
          className="hero-button"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Work with Me
        </button>
  
        {/* Download Resume */}
        <a
          href="/Rajasekhar_AvayaContactCenterEngineer_Resume.docx"
          download
          className="hero-button hero-download"
        >
          Download Resume
        </a>
      </div>
    </div>
  
    <div className="hero-right">
      <img src="/profile.jpg" alt="profile" className="hero-image" />
    </div>
  </section>
  );
};

export default Hero;


