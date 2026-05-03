import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Bellezaa</div>
            <p className="footer-tagline">
              Crafting timeless beauty through thoughtful design.
              A creative studio specializing in luxury beauty and lifestyle brands.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="/">Brand Identity</a></li>
                <li><a href="/">Art Direction</a></li>
                <li><a href="/">Visual Design</a></li>
                <li><a href="/">Packaging</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <li><a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="/" target="_blank" rel="noopener noreferrer">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bellezaa. All rights reserved.
          </p>
          <p className="footer-copyright" style={{ fontStyle: 'italic' }}>
            Designed with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;