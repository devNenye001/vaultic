import React from 'react';
import { motion } from 'framer-motion';
import './FeaturesSection.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function FeaturesSection() {
  return (
    <section className="vaultic-features-section" id="rates">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="features-title">
            Everything You Need to<br />
            Trade With Confidence
          </h2>
          <p className="features-subtitle">
            Everything you need to trade crypto and gift cards, all in one place.
          </p>
        </motion.div>

        {/* 2x2 Grid matching exact screenshot */}
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Card 1: Chat with Vaultie AI */}
          <motion.div 
            className="feature-card card-chat-ai"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
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
          </motion.div>

          {/* Card 2: Fast Transactions */}
          <motion.div 
            className="feature-card card-fast-trans"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
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
          </motion.div>

          {/* Card 3: Competitive Rates */}
          <motion.div 
            className="feature-card card-comp-rates"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
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
          </motion.div>

          {/* Card 4: Simple Experience */}
          <motion.div 
            className="feature-card card-simple-exp"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
