import React from 'react';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>Comment réserver en <span className="highlight">3 étapes</span></h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choisissez votre voiture</h3>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Choisissez dates</h3>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Confirmation WhatsApp</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;