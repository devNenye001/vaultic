import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="vaultic-footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-layout">
            {/* Left Brand Column */}
            <div className="footer-brand-side">
              <Link to="/" className="footer-logo">
                <img src="/logo.png" alt="vaultic." className="footer-logo-img" />
              </Link>

              <div className="footer-text-group">
                <p className="footer-brand-note">
                  Trade crypto and gift cards with Vaultic.
                </p>
                <p className="footer-rights">
                  © 2026 Vaultic ltd. All Rights Reserved.
                </p>
              </div>

              {/* Newsletter Form matching screenshot */}
              <form className="footer-newsletter" onSubmit={handleSubmit}>
                <div className="newsletter-box">
                  <FiMail className="mail-glyph" />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="newsletter-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="newsletter-btn">
                    {subscribed ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Nav Links Columns */}
            <div className="footer-links-side">
              {/* Company */}
              <div className="footer-col">
                <h4 className="footer-heading">COMPANY</h4>
                <ul className="footer-ul">
                  <li><a href="#about" className="footer-a">About</a></li>
                  <li><a href="#blog" className="footer-a">Blog</a></li>
                  <li><a href="#rates" className="footer-a">Rates</a></li>
                  <li><Link to="/" className="footer-a">Crypto</Link></li>
                  <li><Link to="/" className="footer-a">Gift Cards</Link></li>
                </ul>
              </div>

              {/* Legal - Risk Disclosure removed as requested */}
              <div className="footer-col">
                <h4 className="footer-heading">LEGAL</h4>
                <ul className="footer-ul">
                  <li><a href="#privacy" className="footer-a">Privacy Policy</a></li>
                  <li><a href="#terms" className="footer-a">Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Support */}
              <div className="footer-col">
                <h4 className="footer-heading">SUPPORT</h4>
                <ul className="footer-ul">
                  <li><a href="#help" className="footer-a">Help Center</a></li>
                  <li><a href="#contact" className="footer-a">Contact</a></li>
                  <li><a href="#faqs" className="footer-a">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
