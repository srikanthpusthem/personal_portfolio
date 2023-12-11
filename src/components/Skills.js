import React from 'react';
import './Skills.css'; // Make sure you have a Skills.css for styling

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <ul>
        <li>Proficient in Java, Python, C, and C++</li>
        <li>Experienced with React, Node.js, and Express.js for full-stack development</li>
        <li>Skilled in Machine Learning and Deep Learning technologies</li>
        {/* List other skills here */}
      </ul>
    </section>
  );
};

export default Skills;
