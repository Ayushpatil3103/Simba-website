import React from 'react';
import './Aboutsection.css';

const About = () => {
  return (
    <div className='ss'>
    <div className="about-section container" id='about'>
      <div className="row align-items-center">
        
        <div className="col-md-6 text-section">
          <h1 className="welcome-bg-text">welcome</h1>
          <h2 className="main-heading">Making homes accessible to one and all in Tanzania.</h2>

    <div className="description-container">
  <p className="description">
    At Simba Developer, we prioritize doing the right things, the right way, for the right reasons. 
    Guided by strong ethics, we aim to be a successful, sustainable, and responsible company in Tanzania.
    Integrity and transparency shape our decisions, while a culture of honesty fosters positive relationships 
    with our customers, suppliers, and communities.
  </p>
<br></br>
  <div className="explore-link-container">
    <a href="#" className="explore-link">Continue Exploring</a>
  </div>
</div>


        </div>

        <div className="col-md-6 stats-section">
          <div className="row">
            <div className="col-6 stat-box">
              <h3>2005</h3>
              <p>Year of Incorporation</p>
            </div>
            <div className="col-6 stat-box">
              <h3>700+</h3>
              <p>Motivated Employees</p>
            </div>
            <div className="col-6 stat-box">
              <h3>40+</h3>
              <p>Projects Executed</p>
            </div>
            <div className="col-6 stat-box">
              <h3>80+</h3>
              <p>High-tech Machinery</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div> 
  )
}

export default About;
