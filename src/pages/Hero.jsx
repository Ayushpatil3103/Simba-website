import React from 'react';
import simba from "../assets/simba-files/simba-logo.png";
import Landing from "../assets/simba-files/hero-banner.jpg";
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container" style={{ 
      backgroundImage: `url(${Landing})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }}>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
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
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects Undertaken</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services Offered</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Who We Are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News and Media</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-overlay">
       
      </div>
    </div>
  )
}

export default Hero;
