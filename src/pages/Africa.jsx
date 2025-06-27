import React from 'react';
import './africa.css';
import africaMap from '../assets/simba-files/map-art.png';  // update with your correct path

function AfricaSection() {
  return (
    <div className="africa-section container">
      <div className="row align-items-center">
        <div className="col-md-6 image-container">
          <img src={africaMap} alt="Africa Map" className="africa-map" />
        </div>
        <div className="col-md-6 text-container">
          <div className="speech-bubble">
            <h2>Always keeping <br></br><span className="highlight">Africa</span> <i>first</i></h2>
            <p>
              At Simba Developer, we prioritize doing the right things, the right way, for the right reasons. 
              Guided by strong ethics, we aim to be a successful, sustainable, and responsible company in Tanzania. 
              Integrity and transparency shape our decisions, while a culture of honesty fosters positive relationships 
              with our customers, suppliers, and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfricaSection;
