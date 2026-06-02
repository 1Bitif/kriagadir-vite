import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { whatsappNumber } from '../data/carsData';
import MoroccoMap from './MoroccoMap';

function Hero() {
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState('Marrakech');
  const [selectedDuration, setSelectedDuration] = useState('3-7 jours');

  const cities = [t('tangier'), t('rabat'), t('casablanca'), t('marrakech'), t('agadir')];
  const durations = ['3-7 jours', '8-14 jours', '15+ jours'];

  const handleReservation = () => {
    const message = `Bonjour KriAgadir! 👋\n\nJe souhaite récupérer ma voiture à: ${selectedCity}\nDurée: ${selectedDuration}\n\nMerci de me contacter pour plus d'informations.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-left">
          <h1>{t('confirmed')} <span className="highlight">{t('in5min')}</span></h1>
          <p className="hero-subtitle">{t('chooseCity')}</p>

          <div className="form-group">
            <label>{t('wherePickup')}</label>
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

          <div className="form-group">
            <label>{t('howLong')}</label>
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

          <button className="whatsapp-reserve-btn" onClick={handleReservation}>
            {t('reserveNow')}
          </button>

          <div className="features-list">
            <span>{t('freeDeliveryMarrakech')}</span>
            <span>{t('clearConditions')}</span>
            <span>{t('noDeposit')}</span>
          </div>
        </div>

        <div className="hero-right">
          <MoroccoMap />
        </div>
      </div>
    </section>
  );
}

export default Hero;