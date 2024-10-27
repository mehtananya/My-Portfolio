import React from 'react';
import './Header.css'; // External CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Ananya's Portfolio</h1>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
