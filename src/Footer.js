// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.png'; // Adjust the path as necessary
import './Footer.css'; // Ensure this path is correct

const Footer = () => {
 return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/SaveAMeal">Save A Meal</Link></li>
              <li><Link to="/Partners">Partners</Link></li>
              <li><Link to="/Aboutus">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3>Social</h3>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3>Subscribe</h3>
            <p>Subscribe to our newsletter to receive updates and special offers.</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;