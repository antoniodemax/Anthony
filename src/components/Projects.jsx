import React from 'react';
// import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="front">
            <h3>Project 1</h3>
          </div>
          <div className="back">
            <p>Details about Project 1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
