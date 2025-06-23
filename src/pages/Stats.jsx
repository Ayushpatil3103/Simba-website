import React from 'react';
import './stats.css';

import img1 from '../assets/simba-files/110-resi-landing.jpg';
import img2 from '../assets/simba-files/icon-project-landing.jpg';
import img3 from '../assets/simba-files/project-landing (1).jpg';
import img4 from '../assets/simba-files/project-landing.jpg';

function Stats() {
  return (
    <div className="projects-section container">
      <h2 className="projects-title">
        Completion of projects in a time frame, Continuous human resources development, and a strong commitment to client satisfaction.
      </h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src={img1} alt="Blue Ocean" />
          <div className="project-overlay">
            <div className="category">RESIDENTIAL</div>
            <div className="project-title">BLUE OCEAN RESIDENCY <br /> ZANZIBAR</div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={img2} alt="Champwani Island" />
          <div className="project-overlay">
            <div className="category">RESIDENTIAL</div>
            <div className="project-title">CHAMPWANI ISLAND <br /> ZANZIBAR</div>
            <div className="corner-icon">🔎</div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={img3} alt="Old Town" />
          <div className="project-overlay">
            <div className="category">CIVIL</div>
            <div className="project-title">RESTORATION OF <br /> OLD TOWN & MARKET <br /> DARAJANI, ZANZIBAR</div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <img src={img4} alt="Africab" />
          <div className="project-overlay">
            <div className="category">COMMERCIAL</div>
            <div className="project-title">AFRICAB BUSINESS PARK <br /> DAR ES SALAAM, TANZANIA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
