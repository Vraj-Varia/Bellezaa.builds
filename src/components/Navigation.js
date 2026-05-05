import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="navigation-inner">
          <NavLink to="/" className="logo">
            Bellezaa
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link" end onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link" onClick={closeMobileMenu}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="mobile-menu" onClick={closeMobileMenu}>
          <div className="mobile-menu-inner">
            <ul className="mobile-nav-links">
              <li>
                <NavLink to="/" className="mobile-nav-link" end onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};


export default Navigation;
