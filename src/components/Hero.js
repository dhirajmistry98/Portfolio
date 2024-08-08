// src/components/Hero.js
import React from "react";
import profileImage from "../assets/profile-image .svg";

const Hero = () => {
  return (
    <header id="hero">
      <section className="header-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h1>Hi I'm Dhiraj Mistry</h1>

        <div className="content-text">
          <h2>Building digital</h2>
          <h2>products, brands, and experience.</h2>

          <p>
            A Full-Stack Developer with expertise in the MERN stack, experienced
            in building both front-end and back-end solutions. Skilled in
            creating responsive web applications and delivering comprehensive
            digital solutions that enhance user experience and engagement.
          </p>
        </div>
        <a
          href="tel:9819065290?subject=Connecting%20With%20You"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect With Me
        </a>
      </section>
    </header>
  );
};

export default Hero;
