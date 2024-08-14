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
        {/* Food Delivery project as the first project */}
        <div className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Food Delivery Website</h3>
              <p>
                React.js, MongoDB, Express, Node.js, Stripe
              </p>
            </div>

            <div className="project-link">
              <a
                href="https://github.com/dhirajmistry98/food-delivery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://food-delivery-forntend.onrender.com"
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
              <h3>webflix Website</h3>
              <p>MERN stack</p>
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
              <h3>Snappy Website</h3>
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
