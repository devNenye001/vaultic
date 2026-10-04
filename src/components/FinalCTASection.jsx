import React from 'react';
import './FinalCTASection.css';

function GooglePlayColorIcon() {
  return (
    <svg 
      className="play-glyph-svg" 
      viewBox="0 0 512 512" 
      width="24" 
      height="26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gp-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A0FF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>
        <linearGradient id="gp-green-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#00FF85" />
        </linearGradient>
        <linearGradient id="gp-yellow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFBA00" />
          <stop offset="100%" stopColor="#FFD600" />
        </linearGradient>
        <linearGradient id="gp-red-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3A44" />
          <stop offset="100%" stopColor="#E52E38" />
        </linearGradient>
      </defs>
      {/* 1. Left Blue Wedge */}
      <path 
        d="M47 0C44 4.5 42 10.2 42 17v478c0 6.8 2 12.5 5 17l248-248L47 0z" 
        fill="url(#gp-blue-grad)" 
      />
      {/* 2. Top Green Triangle */}
      <path 
        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" 
        fill="url(#gp-green-grad)" 
      />
      {/* 3. Bottom Red Triangle */}
      <path 
        d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" 
        fill="url(#gp-red-grad)" 
      />
      {/* 4. Right Yellow Apex on top */}
      <path 
        d="M469.7 236.4l-84.3-48.6-60.1 60.2 60.1 60.1 84.3-48.6c18.5-10.7 18.5-28.1 0-38.8l-.1-1.3z" 
        fill="url(#gp-yellow-grad)" 
      />
    </svg>
  );
}

export default function FinalCTASection() {
  return (
    <section className="vaultic-final-cta-section" id="download">
      <div className="container">
        <div className="final-cta-card">
          {/* Teal curved line design exported as teal-line */}
          <div className="cta-teal-backdrop">
            <img 
              src="/teal-line.png" 
              alt="" 
              className="cta-teal-line-img" 
              aria-hidden="true"
            />
          </div>

          {/* Left Text and Store Button */}
          <div className="final-cta-content">
            <h2 className="cta-heading">
              Trade Smarter.<br />
              Trade With Vaultic.
            </h2>

            <p className="cta-subtext">
              Buy and sell crypto, trade gift cards, and manage your transactions with ease.
            </p>

            <div className="cta-playstore-block">
              <span className="playstore-label">AVAILABLE ON PLAYSTORE</span>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="google-play-pill-btn"
              >
                <GooglePlayColorIcon />
                <div className="play-label-group">
                  <span className="play-mini-caption">GET IT ON</span>
                  <span className="play-store-title">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup - cut off cleanly at bottom */}
          <div className="final-cta-phone-container">
            <img 
              src="/final-cta-picture.svg" 
              alt="Vaultic App Interface" 
              className="final-cta-phone-cut"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
