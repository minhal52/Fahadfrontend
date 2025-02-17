import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // FontAwesome icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const location = useLocation(); // Get current location

  // Handle dropdown toggle
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent closing the dropdown when clicking inside
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown if clicked anywhere outside
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Function to check if the current page matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/Fahad_EngineeringLogo-.png" alt="Company Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={closeDropdown}>
        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={isActive("/") ? "active" : ""}
          >
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li className={`dropdown ${dropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
          <Link to="#">
            Services <FaChevronDown className={`dropdown-icon ${dropdownOpen ? "open" : ""}`} />
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link 
                to="/services#machinery" 
                onClick={() => setMenuOpen(false)} 
                className={isActive("/services#machinery") ? "active" : ""}
              >
                Machinery
              </Link>
            </li>
            {/* <li>
              <Link 
                to="/services#material-supply" 
                onClick={() => setMenuOpen(false)} 
                className={isActive("/services#material-supply") ? "active" : ""}
              >
                Material Supply
              </Link>
            </li> */}
            <li>
              <Link 
                to="/services#manpower-supply" 
                onClick={() => setMenuOpen(false)} 
                className={isActive("/services#manpower-supply") ? "active" : ""}
              >
                Manpower Supply
              </Link>
            </li>
            <li>
              <Link 
                to="/services#instrumentation" 
                onClick={() => setMenuOpen(false)} 
                className={isActive("/services#instrumentation") ? "active" : ""}
              >
                Instrumentation
              </Link>
            </li>
            <li>
              <Link 
                to="/subcategory/Equipments" 
                onClick={() => setMenuOpen(false)} 
                className={isActive("/subcategory/Equipments") ? "active" : ""}
              >
                Equipment Rentals
              </Link>
            </li>
            <li>
              <Link 
                to="/subcategory/Transportation" 
                onClick={() => setMenuOpen(false)} 
                className={isActive("/subcategory/Transportation") ? "active" : ""}
              >
                Vehicle Rentals
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={isActive("/about") ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={isActive("/contact") ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Menu Toggle Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
