import React from 'react';
import simba from "../assets/simba-files/simba-logo.png";
import Landing from "../assets/simba-files/hero-banner.jpg";
import './Hero.css';

function Hero() {
  return (
   <div
  className="hero-container"
  style={{ backgroundImage: `url(${Landing})` }}
>
<a href="#home" className="logo-container">
  <img src={simba} alt="Simba Logo" className="hero-logo" />
</a>

     <nav className="custom-navbar">
  <ul>
    <li><a href="#home">HOME</a></li>
    <li><a href="#projects">PROJECTS UNDERTAKEN</a></li>
    <li><a href="#services">SERVICES OFFERED</a></li>
    <li><a href="#about">WHO WE ARE</a></li>
    <li><a href="#news">NEW & MEDIA</a></li>
    <li><a href="#contact">CONTACT US</a></li>
  </ul>
</nav>

<div className="slider-controls">
  <button className="slider-btn">← Prev</button>
  <button className="slider-btn">Next →</button>
</div>

      {/* Overlay Text */}
    

    </div>
  )
}

export default Hero;
