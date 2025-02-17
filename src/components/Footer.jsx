import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Add icons for social links
import { Link } from 'react-router-dom'; // Using Link for navigation

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
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/subcategory/Equipments" className="footer-link">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li> */}
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
