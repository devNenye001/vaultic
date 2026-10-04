import React from 'react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  return (
    <section className="vaultic-features-section" id="rates">
      <div className="container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">
            Everything You Need to<br />
            Trade With Confidence
          </h2>
          <p className="features-subtitle">
            Everything you need to trade crypto and gift cards, all in one place.
          </p>
        </div>

        {/* 2x2 Grid matching exact screenshot */}
        <div className="features-grid">
          {/* Card 1: Chat with Vaultie AI */}
          <div className="feature-card card-chat-ai">
            <div className="feature-card-visual">
              <div className="feature-phone-wrap">
                <img 
                  src="/chat-ai.png" 
                  alt="Chat with Vaultie AI" 
                  className="feature-phone-img" 
                />
              </div>
            </div>
            <div className="feature-card-info">
              <h3 className="feature-card-heading">Chat with Vaultie AI</h3>
              <p className="feature-card-desc">
                Get instant help with your trades, rates, and questions with Vaultic's AI-powered assistant.
              </p>
            </div>
          </div>

          {/* Card 2: Fast Transactions */}
          <div className="feature-card card-fast-trans">
            <div className="feature-card-visual">
              <div className="feature-phone-wrap">
                <img 
                  src="/fast-transactions.png" 
                  alt="Fast Transactions" 
                  className="feature-phone-img" 
                />
              </div>
            </div>
            <div className="feature-card-info">
              <h3 className="feature-card-heading">Fast Transactions</h3>
              <p className="feature-card-desc">
                Buy, sell, and trade with a smooth process designed to get things done quickly.
              </p>
            </div>
          </div>

          {/* Card 3: Competitive Rates */}
          <div className="feature-card card-comp-rates">
            <div className="feature-card-visual">
              <div className="feature-phone-wrap">
                <img 
                  src="/competitive-rates.png" 
                  alt="Competitive Rates" 
                  className="feature-phone-img" 
                />
              </div>
            </div>
            <div className="feature-card-info">
              <h3 className="feature-card-heading">Competitive Rates</h3>
              <p className="feature-card-desc">
                Access competitive rates for crypto and gift card transactions.
              </p>
            </div>
          </div>

          {/* Card 4: Simple Experience */}
          <div className="feature-card card-simple-exp">
            <div className="feature-card-visual">
              <div className="feature-phone-wrap">
                <img 
                  src="/simple-experience.png" 
                  alt="Simple Experience" 
                  className="feature-phone-img feature-three-phones" 
                />
              </div>
            </div>
            <div className="feature-card-info">
              <h3 className="feature-card-heading">Simple Experience</h3>
              <p className="feature-card-desc">
                From choosing what to trade to completing your transaction, everything is kept simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
