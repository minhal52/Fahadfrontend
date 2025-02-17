import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Add icons for social links

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/Fahad_EngineeringLogo-.png" alt="Fahad Engineering" />
        </div>

        <div className="footer-links">
          <h4>Quick links</h4>
          <ul>
            <li><a href="/">Home</a></li> {/* Corrected link */}
            <li><a href="/about">About Us</a></li>
            <li><a href="/subcategory/Equipments">Categories</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <li><a href="/privacy-policy">Privacy Policy</a></li> */}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>Email: info@fahadeng.com</p>
          <p>Phone: +966-562449061</p>
          <p>Location: Jubail, Saudi Arabia</p>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Fahad Engineering. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
