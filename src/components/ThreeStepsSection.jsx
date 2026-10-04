import React, { useState } from 'react';
import './ThreeStepsSection.css';

export default function ThreeStepsSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      image: '/create-account.svg',
      title: 'Create Your Account',
      description: 'Sign up for Vaultic and get access to the platform.',
      alt: 'Create Your Account'
    },
    {
      number: 2,
      image: '/choose-your-trade.png',
      title: 'Choose Your Trade',
      description: 'Select crypto or gift cards and enter your transaction details.',
      alt: 'Choose Your Trade'
    },
    {
      number: 3,
      image: '/fast-transactions.png',
      title: 'Complete Your Trade',
      description: 'Review your rate, confirm your details, and complete your trade.',
      alt: 'Complete Your Trade'
    }
  ];

  return (
    <section className="vaultic-3steps-section">
      <div className="container">
        <div className="steps-container-layout">
          {/* Left Column Header */}
          <div className="steps-header-col">
            <h2 className="steps-main-title">
              Start Trading in 3 steps
            </h2>
            <p className="steps-subtitle">
              Get started, choose your trade, and complete your transaction.
            </p>
          </div>

          {/* Right Column: Timeline & Cards */}
          <div className="steps-timeline-col">
            {/* The vertical dashed timeline bar on desktop */}
            <div className="steps-timeline-line">
              <div 
                className="steps-timeline-progress" 
                style={{ height: `${((activeStep - 1) / 2) * 100}%` }}
              />
            </div>

            {/* Steps list */}
            <div className="steps-cards-list">
              {steps.map((step) => {
                const isActive = activeStep === step.number;

                return (
                  <React.Fragment key={step.number}>
                    <div 
                      className={`step-row-item ${isActive ? 'step-active' : ''}`}
                      onMouseEnter={() => setActiveStep(step.number)}
                      onClick={() => setActiveStep(step.number)}
                    >
                      {/* Circle Node on Timeline */}
                      <div className="step-circle-badge">
                        <span className="step-number-text">{step.number}</span>
                      </div>

                      {/* Step Card matching screenshot */}
                      <div className="step-content-card">
                        <div className={`step-card-media-wrapper step-${step.number}-media`}>
                          <img 
                            src={step.image} 
                            alt={step.alt} 
                            className={`step-card-img step-${step.number}-img`}
                          />
                        </div>

                        <div className="step-card-text-block">
                          <h3 className="step-item-title">{step.title}</h3>
                          <p className="step-item-desc">{step.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Responsive connector line leading to the next card */}
                    {step.number < steps.length && (
                      <div className="step-mobile-connector" aria-hidden="true">
                        <div className="step-mobile-connector-line" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
