// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal projects</p>
      </div>

      <article className="project">
        <div className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project One</h3>
              <p>Mern stack</p>
            </div>

            <div className="project-link">
              <a
                href="https://github.com/dhirajmistry98/webflix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://webflix-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Two</h3>
              <p>React, Node.js, Socket.io, MongoDB</p>
            </div>

            <div className="project-link">
              <a
                href="https://github.com/dhirajmistry98/chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://chat-gg3a.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
