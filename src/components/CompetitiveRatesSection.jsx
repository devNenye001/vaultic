import React from 'react';
import { Link } from 'react-router-dom';
import './CompetitiveRatesSection.css';

export default function CompetitiveRatesSection() {
  return (
    <section className="vaultic-rates-section" id="rates-overview">
      <div className="container rates-flex-container">
        {/* Title */}
        <h2 className="rates-main-heading">
          Competitive Rates,<br />
          Clear Trades
        </h2>

        {/* Subtitle */}
        <p className="rates-sub-text">
          Check live prices and clear trades on all transactions.
        </p>

        {/* Mockup with concentric rings cut at bottom */}
        <div className="rates-graphic-frame">
          <div className="concentric-ring ring-inner" />
          <div className="concentric-ring ring-middle" />
          <div className="concentric-ring ring-outer" />

          <div className="rates-phone-cutout">
            <img 
              src="/competitive-rates-clear-rates-section.svg" 
              alt="Competitive Rates" 
              className="rates-phone-image"
            />
          </div>
        </div>

        {/* Trade Now Button */}
        <div className="rates-action-wrapper">
          <Link to="/404" className="btn btn-primary rates-trade-btn">
            Trade Now
          </Link>
        </div>
      </div>
    </section>
  );
}
