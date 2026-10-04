import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vaultic-not-found-page">
      <Navbar />

      <main className="not-found-main-area">
        <div className="container not-found-content-container">
          {/* Gray box with black circle and exclamation mark */}
          <div className="exclamation-square-box">
            <div className="exclamation-circle-glyph">
              <span className="exclamation-text">!</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="not-found-headline">Page not Found</h1>

          {/* Subtitle */}
          <p className="not-found-subtext">
            This page cant be transcribed. It looks like this page has<br />
            left the meeting - or maybe it never joined.
          </p>

          {/* Go Home button */}
          <div className="not-found-btn-wrapper">
            <Link to="/" className="btn btn-primary not-found-home-btn">
              Go Home
            </Link>
          </div>
        </div>

        {/* Final CTA Banner */}
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
