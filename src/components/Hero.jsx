import React, { useState } from 'react';
import { whatsappNumber } from '../data/carsData';
import MoroccoMap from './MoroccoMap.jsx';

function Hero() {
  const [selectedCity, setSelectedCity] = useState('Marrakech');
  const [selectedDuration, setSelectedDuration] = useState('3-7 jours');

  const cities = ['Tanger', 'Rabat', 'Casablanca', 'Marrakech', 'Agadir'];
  const durations = ['3-7 jours', '8-14 jours', '15+ jours'];

  const handleReservation = () => {
    const message = `Bonjour KriAgadir! 👋\n\nJe souhaite récupérer ma voiture à: ${selectedCity}\nDurée: ${selectedDuration}\n\nMerci de me contacter pour plus d'informations.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        {/* LEFT SIDE - Booking Form */}
        <div className="hero-left">
          <h1>Votre Voiture <span className="highlight">Confirmée</span><br />en 5 minutes</h1>
          <p className="hero-subtitle">
            Choisissez votre ville et la durée. Confirmation immédiate via WhatsApp.
          </p>

          {/* City Selection */}
          <div className="form-group">
            <label>📍 Où souhaitez-vous récupérer la voiture ?</label>
            <select 
              className="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Duration Selection */}
          <div className="form-group">
            <label>⏱️ Combien de temps ?</label>
            <div className="duration-options">
              {durations.map(duration => (
                <button
                  key={duration}
                  className={`duration-option ${selectedDuration === duration ? 'active' : ''}`}
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Button */}
          <button className="whatsapp-reserve-btn" onClick={handleReservation}>
            📱 Réserver sur WhatsApp
          </button>

          {/* Features */}
          <div className="features-list">
            <span>✅ Livraison gratuite à Marrakech</span>
            <span>🔒 Conditions claires • Caution restituée</span>
            <span>💳 Option sans caution</span>
          </div>
        </div>

        {/* RIGHT SIDE - Morocco Map with Cities */}

        <div className="hero-right">
          <MoroccoMap />
        </div>
      </div>
    </section>
  );
}

export default Hero;