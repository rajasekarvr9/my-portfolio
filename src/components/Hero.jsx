import React from "react";
import ProfileImage from "/profile-img.png";

const Hero = () => {
  return (
    <section className="hero-container">
      
      {/* Left: Text */}
      <div className="hero-content">
        <h1 className="hero-title">Hey, I’m Rajasekhar Reddy.</h1>

        <p className="hero-subtitle">
        I help businesses architect and deploy intelligent, cloud-native Contact Center and IVR solutions with advanced call routing, automation, 
        and omni-channel integration to deliver scalable and high-performance customer engagement platforms.         
        </p>

        <div className="hero-buttons">

          <button
            className="hero-button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Work with Me
          </button>

          <a
            href={`${import.meta.env.BASE_URL}Rajasekhar_AvayaContactCenterEngineer_Resume.docx`}
            download="Rajasekhar_AvayaContactCenterEngineer_Resume.docx"
            className="hero-button hero-download"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="hero-image-wrapper">
        <img src={ProfileImage} alt="profile" className="hero-image" />
      </div>

    </section>
  );
};

export default Hero;
