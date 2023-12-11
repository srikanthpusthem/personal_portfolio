import React from 'react';
import './About.css'; // Ensure you have an About.css file for styling

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Hi, I'm Srikanth Pusthem, a passionate Software Engineer and Computer Science enthusiast currently pursuing my master's at the University of Cincinnati. With a solid foundation in technology and a zeal for innovation, I'm on a mission to blend creative problem-solving with technical prowess. Join me on this exciting journey of technological exploration!
      </p>

      <div className="education-experience">
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li><strong>Master's in Computer Science</strong> - University of Cincinnati (Current)</li>
            <li><strong>Bachelor's of Technology in Computer Science</strong> - VNR Vignana Jyothi Institute of Engineering and Technology, CGPA: 8.8/10</li>
            <li><strong>Intermediate (Maths, Physics, Chemistry)</strong> - SR Junior College, Marks: 985/1000</li>
            <li><strong>10th Grade (SSC)</strong> - Wisdom SPAES School, CGPA: 10/10</li>
          </ul>
        </div>
        
        <div className="experience">
          <h3>Professional Experience</h3>
          <ul>
            <li><strong>Systems Engineer</strong>, Tata Consultancy Services (2017 – 2021): Worked with Spring Framework, IBM DataStage, and Oracle databases. Developed and deployed ETL jobs, and collaborated on project environments and design modifications.</li>
            <li><strong>Digital Intern</strong>, Tata Consultancy Services (Jul 2020 – Sep 2020): Worked on Guide-wire Bots project using React, Material-UI, and Open-CV for car damage detection. Successfully transitioned to FTE post internship.</li>
            {/* Add any other relevant experiences */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
