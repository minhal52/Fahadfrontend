import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo-removebg-preview.png" alt="Fahad Engineering" />
        </div>

        {/* Navigation Links (Same as Navbar) */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            {/* <li><Link to="/clients" className="footer-link">Clients</Link></li> */}
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>Email: info@fahadeng.com</p>
          <p>Phone: +966-562449061</p>
          <p>Location: Jubail, Saudi Arabia</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
  <h3>Follow Us On</h3> 
  <a href="https://www.linkedin.com/company/fahad-eng/" className="social-link" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-linkedin"></i>
  </a>
  <a href="https://www.instagram.com/fahadengineering/" className="social-link" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="https://wa.me/966562449061" className="social-link" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp"></i>
  </a>
  <a href="mailto:info@fahadeng.com" className="social-link">
    <i className="fa-solid fa-envelope"></i>
  </a>
</div>
</div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Fahad Engineering. All Rights Reserved.</p>
        <p>Designed by Ebota</p>
      </div>
    </footer>
  );
};

export default Footer;
