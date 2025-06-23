import React from 'react';
import './Hero.css';

function About() {
  return (
    <div className="about-section container">
      <div className="row align-items-center">
        {/* Left Side - Content */}
        <div className="col-md-6 text-content">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
            Simba Infrastructure brings expertise, innovation, and dedication to infrastructure development projects. 
            Our mission is to contribute towards Africa’s rapid growth by delivering high quality projects that empower communities.
          </p>
        </div>

        {/* Right Side - 4 Counters */}
        <div className="col-md-6 counters-grid">
          <div className="row">
            <div className="col-6 counter-box">
              <h3>2005</h3>
              <p>Year of incorporation</p>
            </div>
            <div className="col-6 counter-box">
              <h3>700+</h3>
              <p>Motivated employees</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 counter-box">
              <h3>40+</h3>
              <p>Projects executed</p>
            </div>
            <div className="col-6 counter-box">
              <h3>80+</h3>
              <p>High-tech Machinery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
