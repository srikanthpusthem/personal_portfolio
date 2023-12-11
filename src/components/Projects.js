import React from 'react';
import './Projects.css'; // Make sure you have a Projects.css for styling

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Eco-friendly Recommendation System (FARRACO)</h3>
        <p>A cutting-edge Machine Learning and IoT solution designed to sustain soil fertility and promote organic farming practices...</p>
      </div>
      {/* Repeat the above structure for each project */}
    </section>
  );
};

export default Projects;
