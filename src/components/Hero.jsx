import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="vaultic-hero">
      <div className="container hero-container">
        {/* Title - Montserrat Medium */}
        <h1 className="hero-title">
          Trade Crypto With Confidence.
        </h1>

        {/* Subtitle - Exact Words */}
        <p className="hero-subtitle">
          Buy, sell and trade crypto and gift cards through a simple,<br />
          seamless platform built for you.
        </p>

        {/* Buttons - Exact Words & Styling */}
        <div className="hero-actions">
          <a href="#download" className="btn hero-btn-store">
            Download from Play Store
          </a>
          <a href="#features" className="btn hero-btn-products">
            Explore Products <FiChevronRight className="hero-chevron" />
          </a>
        </div>

        {/* Hero Phone Mockup with Smooth Bottom Fade */}
        <div className="hero-image-wrapper">
          <img 
            src="/hero.png" 
            alt="Vaultic Mobile App" 
            className="hero-phone-img" 
          />
          <div className="hero-fade-overlay" />
        </div>
      </div>
    </section>
  );
}
