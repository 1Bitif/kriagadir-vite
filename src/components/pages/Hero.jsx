import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { whatsappNumber } from '../../data/carsData';

function Hero() {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [activeTab, setActiveTab] = useState('short');
  const [imageLoaded, setImageLoaded] = useState(false);

  const cities = ['tangier', 'rabat', 'casablanca', 'marrakech', 'agadir'];

  const tabs = [
    { key: 'short', label: t('shortTerm') },
    { key: 'long', label: t('longTerm') },
    { key: 'exclusive', label: t('exclusive') },
  ];

  const handleSearch = () => {
    const message = t('whatsappMessage', {
      city: selectedCity || t('cityNotSelected'),
      duration: `${pickupDate || '?'} → ${dropoffDate || '?'}`,
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    const img = new Image();
    img.src = '/hero-bg.webp';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section 
      className="relative min-h-[92vh] flex flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-500 ease-in-out"
      style={{ 
        backgroundImage: imageLoaded ? "url('/hero-bg.webp')" : 'none',
        backgroundColor: '#1a1a1a'
      }}
    >
      {/* Skeleton loader while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Dark gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
      />

      {/* Content – adjusted top padding to match fixed navbar (h-16 + spacer) */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[92vh] px-4 sm:px-8 md:px-16 lg:px-24 pt-20 pb-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight drop-shadow-2xl">
            {t('heroTitle')}
          </h1>
          
          <motion.a
            href="#fleet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mt-5 transition-all duration-300 group"
          >
            {t('moreInfo')}
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-auto"
        >
          {/* Tabs */}
          <div className="flex items-center gap-4 md:gap-6 mb-4 px-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm pb-2 border-b-2 transition-all duration-300 bg-transparent cursor-pointer font-medium whitespace-nowrap
                  ${activeTab === tab.key
                    ? 'text-white border-orange-500'
                    : 'text-white/55 border-transparent hover:text-white/80 hover:border-white/30'
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Search bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col md:flex-row items-stretch md:items-center overflow-hidden hover:shadow-3xl transition-shadow duration-300"
          >
            {/* Destination select */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200/50 hover:bg-gray-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 0111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
                className="flex-1 text-sm text-gray-600 bg-transparent outline-none cursor-pointer appearance-none hover:text-gray-900 transition-colors duration-200"
              >
                <option value="">{t('yourDestination')}</option>
                {cities.map(city => (
                  <option key={city} value={city}>{t(`cities.${city}`)}</option>
                ))}
              </select>
            </div>

            {/* Pickup date */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200/50 hover:bg-gray-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <input
                type="date"
                value={pickupDate}
                onChange={e => setPickupDate(e.target.value)}
                className="flex-1 text-sm text-gray-600 bg-transparent outline-none cursor-pointer hover:text-gray-900 transition-colors duration-200"
                placeholder={t('pickupDate')}
              />
            </div>

            {/* Dropoff date */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 border-b md:border-b-0 border-gray-200/50 hover:bg-gray-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <input
                type="date"
                value={dropoffDate}
                onChange={e => setDropoffDate(e.target.value)}
                className="flex-1 text-sm text-gray-600 bg-transparent outline-none cursor-pointer hover:text-gray-900 transition-colors duration-200"
                placeholder={t('dropoffDate')}
              />
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm px-8 py-5 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              {t('findCar')}
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;