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

      <nav 
        className="navbar navbar-expand-lg navbar-dark navbar-custom" 
 style={{ 
  background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(249, 115, 22, 0.3), rgba(208, 87, 0, 0.6),rgb(207, 62, 0))',
  position: 'absolute', 
  width: '100%', 
  zIndex: 10 
}}


      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <img src={simba} alt="Logo" id='logo' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects Undertaken</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services Offered</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Who We Are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#bew">News and Media</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay Text */}
    

    </div>
  )
}

export default Hero;
