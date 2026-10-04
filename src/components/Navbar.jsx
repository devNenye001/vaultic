import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="vaultic-navbar">
      <div className="container navbar-container">
        {/* Logo - bigger as requested */}
        <Link to="/" className="navbar-logo" aria-label="Vaultic Home">
          <img src="/logo.png" alt="vaultic." className="logo-img" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav">
          <div className="nav-item-dropdown">
            <span className="nav-link dropdown-trigger">
              Products <FiChevronDown className="chevron-icon" />
            </span>
          </div>
          <a href="#features" className="nav-link">Features</a>
          <a href="#rates" className="nav-link">Rates</a>
          <a href="#testimonials" className="nav-link">Blog</a>
          <a href="#support" className="nav-link">Support</a>
        </nav>

        {/* Right CTA Button */}
        <div className="navbar-actions">
          <Link to="/404" className="btn btn-primary nav-cta">
            Get Started
          </Link>

          {/* Burger Menu Button for Mobile Responsiveness */}
          <button
            type="button"
            className="burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <span className="mobile-nav-link">Products</span>
            <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#rates" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Rates
            </a>
            <a href="#testimonials" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </a>
            <a href="#support" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Support
            </a>
            <Link to="/404" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              404 Page
            </Link>
          </nav>
          <div className="mobile-menu-action">
            <Link to="/404" className="btn btn-primary btn-full" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
