import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // Icons

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => {
    setIsMobile(false);
    setDropdown(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        <img src="/Fahad_EngineeringLogo-.png" alt="Fahhad Construction" />
      </Link>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links nav-active" : "nav-links"}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>

        {/* Dropdown with Clickable "Services" Link */}
        <li className="dropdown">
          <div className="dropbtn">
            <Link 
              to="/services" 
              className="dropdown-link" 
              onClick={() => closeMobileMenu()} // ✅ Clicking Services redirects to /services
            >
              Services
            </Link>
            <FaChevronDown 
              className={`dropdown-arrow ${dropdown ? "rotate" : ""}`} 
              onClick={(e) => {
                e.stopPropagation(); // Prevent immediate parent click
                setDropdown(!dropdown);
              }} 
            />
          </div>
          <ul className={dropdown ? "dropdown-content show" : "dropdown-content"}>
            <li><Link to="/services/equipment-rental" onClick={closeMobileMenu}>Equipment Rental</Link></li>
            <li><Link to="/services/transportation" onClick={closeMobileMenu}>Transportation</Link></li>
            <li><Link to="/services/material-supply" onClick={closeMobileMenu}>Material Supply</Link></li>
            <li><Link to="/services/machinery-supply" onClick={closeMobileMenu}>Machinary Supply</Link></li>
            <li><Link to="/services/instrumentation" onClick={closeMobileMenu}>Instrumentation</Link></li>
          </ul>
        </li>

        {/* <li><Link to="/clients" onClick={closeMobileMenu}>Clients</Link></li> */}
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
