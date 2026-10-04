import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TradeServices from '../components/TradeServices';
import FeaturesSection from '../components/FeaturesSection';
import ThreeStepsSection from '../components/ThreeStepsSection';
import VideoSection from '../components/VideoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CompetitiveRatesSection from '../components/CompetitiveRatesSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vaultic-home-page">
      <Navbar />
      <main>
        <Hero />
        <TradeServices />
        <FeaturesSection />
        <ThreeStepsSection />
        <VideoSection />
        <TestimonialsSection />
        <CompetitiveRatesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
