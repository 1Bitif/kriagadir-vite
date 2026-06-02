import React from 'react';
import { whatsappNumber } from '../data/carsData';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Location de voiture <span className="highlight">Premium</span> à Agadir</h1>
        <p>Votre voiture de luxe confirmée en 5 minutes. Livraison gratuite ✨</p>
        <div className="hero-badges">
          <span>✅ Livraison gratuite</span>
          <span>📱 Confirmation WhatsApp</span>
          <span>🔒 Assurance incluse</span>
        </div>
        <a href={`https://wa.me/${whatsappNumber}`} className="btn-primary" target="_blank">Réserver via WhatsApp →</a>
        <div className="cities">
          <span>📍 Agadir</span>
          <span>📍 Marrakech</span>
          <span>📍 Casablanca</span>
          <span>📍 Rabat</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;