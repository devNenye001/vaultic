import React from 'react';
import './VideoSection.css';

export default function VideoSection() {
  return (
    <section className="vaultic-video-section">
      <div className="container">
        <div className="video-banner-box">
          <video
            className="video-banner-media"
            autoPlay
            muted
            loop
            playsInline
            controls
            src="/home-video-mini-ad.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
