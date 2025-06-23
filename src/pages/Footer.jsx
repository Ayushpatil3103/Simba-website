import React from 'react';
import './footer.css';
import simbaAfrica from '../assets/simba-files/footer-logo.png';  // your center logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <h5>PROJECTS UNDERTAKEN</h5>
          <ul>
            <li>RESIDENTIAL PROJECTS</li>
            <li>COMMERCIAL PROJECTS</li>
            <li>INDUSTRIAL PROJECTS</li>
            <li>CIVIL PROJECTS</li>
          </ul>
        </div>

        <div className="footer-links">
          <h5>ABOUT US</h5>
          <ul>
            <li>SERVICES OFFERED</li>
            <li>WHO WE ARE</li>
            <li>NEW & MEDIA</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        <div className="footer-links">
          <h5>TERMS AND USAGE</h5>
          <ul>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>DISCLAIMER</li>
          </ul>
        </div>

        <div className="footer-logo">
          <img src={simbaAfrica} alt="Africa Logo" />
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
            <i class="bi bi-instagram"></i>
          </div>
          <div className="copyright">
            © 2024. Simba Developers. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
