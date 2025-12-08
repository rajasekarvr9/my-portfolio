import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" style={{ marginTop: "50px", padding: "40px" }}>
      <h2>Contact Me</h2>

      <div
        className="contact-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <p>rajasekarvr9@gmail.com</p>
        </div>
        {/* Phone */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h4>Phone</h4>
          <p>+1(479)-966-9646</p>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/raja-sekhar-607195a8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rajasekhar Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h4>GitHub</h4>
          <a
            href="https://github.com/rajasekarvr9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rajasekhar GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
