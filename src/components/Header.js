import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfilePic from './picture.png'; // Make sure to use the correct path to your image file

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={ProfilePic} alt="Srikanth Pusthem" className="profile-pic"/>
        <div className="header-name">
          <h1>Srikanth Pusthem</h1>
          <p className="header-caption">Tech Enthusiast | Lifelong Learner</p>
        </div>
      </div>
      <nav className="header-nav">
        <Link to="/about">🧑‍💼 About Me</Link>
        <Link to="/projects">💼 My Projects</Link>
        <Link to="/skills">🌟 My skills</Link>
        <Link to="/contact">📧 Contact me</Link>
      </nav>
    </header>
  );
};

export default Header;
