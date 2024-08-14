// src/components/Navbar.js
import React, { useState } from "react";
import "../styles/byee.css";
import "../styles/hello.css";
import logo from "../assets/logo.png";
import ThemeSwitcher from "./ThemeSwitcher"; // Import the ThemeSwitcher component
import resume from "../assets/Dhiraj Mistry.pdf"; // Import your PDF

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 id="logo">
          <a href="#">
            <img src={logo} alt="Your Logo" />
          </a>
        </h1>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a className="nav-link" href="#projects">
              PROJECTS
            </a>
          </li>
          <li>
            <a className="nav-link" href="mailto:dhirajmistry6930@gmail.com">
              CONTACT
            </a>
          </li>
          <li>
            <a
              className="nav-link btn btn-primary"
              href={resume} // Use the imported PDF here
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME <i className="fas fa-arrow-right"></i>
            </a>
          </li>
          <ThemeSwitcher /> {/* Add the ThemeSwitcher component */}
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
