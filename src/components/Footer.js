// src/components/Footer.js
import React from "react";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import GmailIcon from "../assets/gmail.svg";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="social">
        <a
            href="mailto:dhirajmistry6930@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GmailIcon} alt="Linkedin" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhiraj-mistry-9ab330265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/dhirajmistry98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <p>
          Copyright &copy; Communitypro <span id="datee"></span>, All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
