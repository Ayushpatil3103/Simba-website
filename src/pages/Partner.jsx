
import React from 'react';
import './Hero.css';

// Import logos
import partner1 from '../assets/simba-files/woodpecker-inv-logo.png';
import partner2 from '../assets/simba-files/gazalle-logo.png';
import partner3 from '../assets/simba-files/hma-arch-logo.png';
import partner4 from '../assets/simba-files/proj-desi-sol-logo.png';
import partner5 from '../assets/simba-files/lucky-cement-logo.png';

function PartnersSection() {
  return (
    <div className="partners-section container">
      <h2 className="section-title text-center">Manufacturing & Fabrication Partners</h2>
      <div className="logos-row">
        <img src={partner1} alt="Partner 1" className="partner-logo" />
        <img src={partner2} alt="Partner 2" className="partner-logo" />
        <img src={partner3} alt="Partner 3" className="partner-logo" />
        <img src={partner4} alt="Partner 4" className="partner-logo" />
        <img src={partner5} alt="Partner 5" className="partner-logo" />
      </div>
    </div>
  );
}

export default PartnersSection;
