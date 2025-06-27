import React from 'react';
import './Pro.css';

import residentialIcon from '../assets/simba-files/residential.png';
import commercialIcon from '../assets/simba-files/commercial.png';
import industrialIcon from '../assets/simba-files/industrial-park.png';
import infrastructureIcon from '../assets/simba-files/civil.png';

function Projects() {
  return (
    <div className="projects-section container" id="projects">
      <div className="projects-row">
        {/* Left Text */}
        <div className="text-content">
          <h2 className="projects-title">No compromise on product quality.</h2>
        </div>

        {/* Right Category Grid */}
        <div className="categories-flex">
          <div className="category-box">
            <img src={residentialIcon} alt="Residential" className="category-icon" />
            <h5>Residential Projects</h5>
          </div>
          <div className="category-box">
            <img src={commercialIcon} alt="Commercial" className="category-icon" />
            <h5>Commercial Projects</h5>
          </div>
          <div className="category-box">
            <img src={industrialIcon} alt="Industrial" className="category-icon" />
            <h5>Industrial Projects</h5>
          </div>
          <div className="category-box">
            <img src={infrastructureIcon} alt="Infrastructure" className="category-icon" />
            <h5>Civil Projects</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
