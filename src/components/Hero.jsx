import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="vaultic-hero">
      <div className="container hero-container">
        {/* Title - Montserrat Medium */}
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Trade Crypto With Confidence.
        </motion.h1>

        {/* Subtitle - Exact Words */}
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Buy, sell and trade crypto and gift cards through a simple,<br />
          seamless platform built for you.
        </motion.p>

        {/* Buttons - Exact Words & Styling */}
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href="#download" 
            className="btn hero-btn-store"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Download from Play Store
          </motion.a>
          <motion.a 
            href="#features" 
            className="btn hero-btn-products"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products <FiChevronRight className="hero-chevron" />
          </motion.a>
        </motion.div>

        {/* Hero Phone Mockup with Smooth Bottom Fade */}
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="/hero.png" 
            alt="Vaultic Mobile App" 
            className="hero-phone-img" 
          />
          <div className="hero-fade-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
