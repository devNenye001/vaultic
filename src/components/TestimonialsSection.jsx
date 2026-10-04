import React, { useRef, useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "Vaultic makes the whole process so straightforward. I can check my rate, complete my trade, and get help whenever I need it.",
      author: "Chukwuebuka Oruta"
    },
    {
      id: 2,
      quote: "Trading gift cards used to feel like a hassle. Vaultic made the process much easier and more convenient.",
      author: "Abubakar Musa"
    },
    {
      id: 3,
      quote: "From the packaging to the jewelry itself, everything felt so thoughtful and premium. I'll definitely be ordering again.",
      author: "Ojo K."
    },
    {
      id: 4,
      quote: "Trading gift cards used to feel like a hassle. Vaultic made the process much easier and more convenient.",
      author: "Johnson Okoro"
    },
    {
      id: 5,
      quote: "Fast payouts, zero hidden charges, and customer support that actually replies within seconds. Highly recommended!",
      author: "Amaka Eke"
    },
    {
      id: 6,
      quote: "Never seen an exchange platform so smooth and reliable. Vaultic is my go-to for all crypto transactions.",
      author: "David Adeleke"
    }
  ];

  const updateScrollButtons = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    // When scroll reaches within 15px of the end, disable next arrow
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  useEffect(() => {
    updateScrollButtons();
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', updateScrollButtons, { passive: true });
      window.addEventListener('resize', updateScrollButtons);
    }
    return () => {
      if (track) {
        track.removeEventListener('scroll', updateScrollButtons);
      }
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const handlePrev = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.review-card-item');
    const scrollStep = card ? card.offsetWidth + 20 : 305;
    trackRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.review-card-item');
    const scrollStep = card ? card.offsetWidth + 20 : 305;
    trackRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
  };

  return (
    <section className="vaultic-testimonials" id="testimonials">
      <div className="container">
        {/* Header with Title and Arrows */}
        <div className="testimonials-top-row">
          <h2 className="testimonials-headline">
            Trusted by People Who<br />
            Trade With Vaultic
          </h2>

          <div className="testimonials-arrows">
            <button
              type="button"
              className={`arrow-circle-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous review"
            >
              <FiArrowLeft size={18} />
            </button>
            <button
              type="button"
              className={`arrow-circle-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next review"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Row with Bounded Smooth Scroll */}
        <div className="testimonials-track-container" ref={trackRef}>
          <div className="testimonials-track">
            {testimonials.map((item) => (
              <div key={item.id} className="review-card-item">
                <p className="review-quote-text">
                  “{item.quote}”
                </p>
                <div className="review-author-name">
                  — {item.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
