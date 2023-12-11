import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ProfilePic from './picture.png'; // Adjust the path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <img src={ProfilePic} alt="Srikanth Pusthem" className={`profile-pic ${isScrolled ? 'move-left' : ''}`} />
        <div className={`header-name ${isScrolled ? 'move-up' : ''}`}>
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
