// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Ensure this path is correct
import logo from "./assets/Logo.png";

function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 };

 return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <a href="/" className="nav-item">Home</a>
        <a href="/SaveAMeal" className="nav-item">SaveAMeal</a>
        <a href="/Partners" className="nav-item">Partners</a>
        <a href="/Aboutus" className="nav-item">AboutUs</a>
      </div>
      <div className="report-problem">
        <a href="/ReportAProblem" className="nav-item">Report a Problem</a>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="/" className="nav-item">Home</a>
        <a href="/SaveAMeal" className="nav-item">SaveAMeal</a>
        <a href="/Partners" className="nav-item">Partners</a>
        <a href="/Aboutus" className="nav-item">AboutUs</a>
      </div>
    </nav>
 );
}

export default Navbar;