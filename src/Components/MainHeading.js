import React from 'react';
import './MainHeading.css'; // External CSS file for styling

const MainHeading = () => {
  return (
    <section className="main-heading">
      <h1>Hi, my name is Ananya.</h1>
      <p>I'm a Computer Science Student.</p>

      <a href="https://www.linkedin.com/in/ananya-mehta07/" target="_blank" rel="noopener noreferrer">
        <button className="connect-button">Let's Connect</button>
      </a>

    </section>
  );
};

export default MainHeading;
