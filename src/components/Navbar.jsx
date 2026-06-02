import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Navbar({ smoothScroll }) {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const languages = [
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'AR', name: 'العربية', flag: '🇲🇦' }
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      smoothScroll(e, 'home');
    }
  };

  const handleVehiclesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#fleet';
    } else {
      smoothScroll(e, 'fleet');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      smoothScroll(e, 'contact');
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">KriAgadir</div>
        <ul className="nav-links">
          <li><a href="/" onClick={handleHomeClick}>{t('home')}</a></li>
          <li><a href="/#fleet" onClick={handleVehiclesClick}>{t('vehicles')}</a></li>
          <li><Link to="/cars">Nos Voitures</Link></li>
          <li><a href="/#contact" onClick={handleContactClick}>{t('contact')}</a></li>
        </ul>
        <div className="navbar-right">
          <select className="currency-selector">
            <option>EUR</option>
            <option>MAD</option>
          </select>
          
          <div className="language-dropdown">
            <button className="language-btn">
              {languages.find(l => l.code === language)?.flag} {language}
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="language-menu">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`language-option ${language === lang.code ? 'active' : ''}`}
                  onClick={() => setLanguage(lang.code)}
                >
                  <span className="lang-flag">{lang.flag}</span>
                  <span className="lang-name">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <a href="tel:+212600144245" className="phone-number">+212 600-144245</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;