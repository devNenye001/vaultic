import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import './TradeServices.css';

function EthereumIcon() {
  return (
    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-crypto-icon">
      <path d="M12 0.5L11.8 1.2V19.1L12 19.3L19.8 14.7L12 0.5Z" fill="white" fillOpacity="0.9"/>
      <path d="M12 0.5L4.2 14.7L12 19.3V10.7V0.5Z" fill="white" fillOpacity="0.75"/>
      <path d="M12 20.7L11.9 20.8V27.1L12 27.5L19.8 16.1L12 20.7Z" fill="white" fillOpacity="0.9"/>
      <path d="M12 27.5V20.7L4.2 16.1L12 27.5Z" fill="white" fillOpacity="0.75"/>
      <path d="M12 19.3L19.8 14.7L12 10.7V19.3Z" fill="white" fillOpacity="0.6"/>
      <path d="M4.2 14.7L12 19.3V10.7L4.2 14.7Z" fill="white" fillOpacity="0.45"/>
    </svg>
  );
}

function GiftCardIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-gift-icon">
      <rect x="1.5" y="1.5" width="25" height="19" rx="3.5" stroke="white" strokeWidth="2.2"/>
      <path d="M1.5 6.5H26.5" stroke="white" strokeWidth="2.2"/>
      <rect x="5" y="12" width="5.5" height="3.5" rx="1" fill="white"/>
    </svg>
  );
}

export default function TradeServices() {
  return (
    <section className="vaultic-trade-services" id="features">
      <div className="container">
        {/* Section title & subtitle - exact copy from screenshot */}
        <div className="services-section-heading">
          <h2 className="section-title-center">What Are You Trading Today?</h2>
          <p className="section-subtitle-center">
            Choose what you need and get<br />
            started in just a few steps.
          </p>
        </div>

        {/* Two Stacked Feature Cards matching exact screenshot */}
        <div className="services-cards-stack">
          {/* Card 1: Crypto */}
          <div className="service-banner-card crypto-banner-card">
            {/* Back Teal Ribbon: Enters from top, weaves behind the phone and loops out to the right */}
            <svg 
              className="decor-teal-back" 
              viewBox="0 0 1140 440" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                d="M 684 -15 
                   C 680 75, 670 140, 715 170 
                   C 765 200, 870 205, 965 195 
                   C 1055 185, 1125 215, 1120 280 
                   C 1115 345, 1040 395, 960 415 
                   C 900 430, 850 445, 820 470" 
                stroke="#91DEDE" 
                strokeWidth="95" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>

            <div className="service-banner-content">
              <div className="service-icon-wrap">
                <EthereumIcon />
              </div>
              <h3 className="service-card-title">Crypto</h3>
              <p className="service-card-desc">
                Access a simple way to buy and sell crypto without navigating a complicated trading process. Vaultic brings the essential tools together so you can check rates, choose your preferred asset, and complete your transaction with ease.
              </p>
              <div>
                <Link to="/404" className="btn btn-white service-btn">
                  Trade Crypto <FiChevronRight className="btn-chevron" />
                </Link>
              </div>
            </div>

            {/* Phone Mockup at z-index: 2 */}
            <div className="service-banner-phone-wrap">
              <img 
                src="/crypto.png" 
                alt="Crypto Trading" 
                className="service-phone-cut" 
              />
            </div>

            {/* Front Teal Ribbon: Exact identical path with clip-path so the lower loop flows seamlessly in front of the phone with ZERO bumps */}
            <svg 
              className="decor-teal-front" 
              viewBox="0 0 1140 440" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ clipPath: 'polygon(50% 63%, 100% 63%, 100% 100%, 50% 100%)' }}
            >
              <path 
                d="M 684 -15 
                   C 680 75, 670 140, 715 170 
                   C 765 200, 870 205, 965 195 
                   C 1055 185, 1125 215, 1120 280 
                   C 1115 345, 1040 395, 960 415 
                   C 900 430, 850 445, 820 470" 
                stroke="#91DEDE" 
                strokeWidth="95" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* Card 2: Gift Cards */}
          <div className="service-banner-card gift-banner-card">
            {/* Back Teal Ribbon: Diagonal band on bottom-left and smooth loop on right */}
            <svg 
              className="decor-teal-back" 
              viewBox="0 0 1140 440" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Bottom-left diagonal band emerging behind phone */}
              <path 
                d="M 595 480 C 655 395, 725 305, 825 175" 
                stroke="#91DEDE" 
                strokeWidth="95" 
                strokeLinecap="round" 
              />
              {/* Right-side curved arch loop behind phone */}
              <path 
                d="M 1008 115 C 1075 120, 1140 170, 1140 240 C 1140 305, 1075 355, 1008 370" 
                stroke="#91DEDE" 
                strokeWidth="95" 
                strokeLinecap="round" 
              />
            </svg>

            <div className="service-banner-content">
              <div className="service-icon-wrap">
                <GiftCardIcon />
              </div>
              <h3 className="service-card-title">Gift Cards</h3>
              <p className="service-card-desc">
                Got a gift card you don't need? Trade it through Vaultic and turn it into value without the unnecessary hassle. Choose your gift card, provide the required details, view your available rate, and follow the steps to complete your transaction. With support from Vaultic's AI assistant, help is always within reach when you need it.
              </p>
              <div>
                <Link to="/404" className="btn btn-white service-btn">
                  Trade Gift Cards <FiChevronRight className="btn-chevron" />
                </Link>
              </div>
            </div>

            <div className="service-banner-phone-wrap">
              <img 
                src="/giftcards.png" 
                alt="Gift Cards Trading" 
                className="service-phone-cut" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
