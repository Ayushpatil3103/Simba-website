import React from 'react';
import './stats.css';

import img1 from '../assets/simba-files/110-resi-landing.jpg';
import img2 from '../assets/simba-files/icon-project-landing.jpg';
import img3 from '../assets/simba-files/project-landing (1).jpg';
import img4 from '../assets/simba-files/project-landing.jpg';

function Stats() {
  return (
    <div className="stats-section">
      <div className="background-title">featured projects</div>

      <div className="stats-wrapper">
        <h2 className="section-title">
          Completion of projects in a time frame, Continuous human resources development, and a strong commitment to client satisfaction.
        </h2>

        <div className="projects-grid">
          {/* Card 1 */}
          <div className="project-card">
            <img src={img1} alt="Blue Ocean" />
            <div className="overlay">
              <div className="nav-button prev">← PREV</div>

              <div className="category">RESIDENTIAL</div>
              <div className="project-info">
                <h4>BLUE OCEAN RESIDENCY</h4>
                <p>ZANZIBAR</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="project-card">
            <img src={img2} alt="Champwani" />
            <div className="overlay">
              <div className="category">RESIDENTIAL</div>
              <div className="project-info">
                <h4>CHAMPWANI ISLAND</h4>
                <p>ZANZIBAR</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="project-card">
            <img src={img3} alt="Old Town" />
            <div className="overlay">
              <div className="category">CIVIL</div>
              <div className="project-info">
                <h4>RESTORATION OF OLD TOWN & MARKET</h4>
                <p>DARAJANI, ZANZIBAR</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="project-card">
            <img src={img4} alt="Africab" />
            <div className="overlay">
              <div className="nav-button next">NEXT →</div>

              <div className="category">COMMERCIAL</div>
              <div className="project-info">
                <h4>AFRICAB BUSINESS PARK</h4>
                <p>DAR ES SALAAM, TANZANIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
