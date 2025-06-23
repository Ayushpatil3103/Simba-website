import React from 'react';
import './Hero.css';

// Import your small images/icons
import residentialIcon from '../assets/simba-files/residential.png';
import commercialIcon from '../assets/simba-files/commercial.png';
import industrialIcon from '../assets/simba-files/industrial-park.png';
import infrastructureIcon from '../assets/simba-files/civil.png';

function Projects() {
  return (
    <div className="projects-section container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-4 text-content">
          <h2 className="section-title">No Compromise on Product Quality</h2>
         
        </div>

        {/* Right Grid */}
      <div className="col-md-8">
  <div className="categories-flex">
    <div className="category-box">
      <img src={residentialIcon} alt="Residential" className="category-icon" />
      <h5>Residential</h5>
    </div>
    <div className="category-box">
      <img src={commercialIcon} alt="Commercial" className="category-icon" />
      <h5>Commercial</h5>
    </div>
    <div className="category-box">
      <img src={industrialIcon} alt="Industrial" className="category-icon" />
      <h5>Industrial</h5>
    </div>
    <div className="category-box">
      <img src={infrastructureIcon} alt="Infrastructure" className="category-icon" />
      <h5>Infrastructure</h5>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Projects;
