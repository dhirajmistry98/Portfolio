import React from 'react';

const YourComponent = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-links">
        <a href="https://example.com" className="project-link">
          <i className="fas fa-globe"></i> Live Site
        </a>
        <a href="https://github.com/your-repo" className="project-link">
          <i className="fab fa-github"></i> GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default YourComponent;
