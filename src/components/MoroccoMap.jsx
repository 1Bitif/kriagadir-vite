import React, { useState } from 'react';
import moroccoMap from '../assets/morocco.svg';

function MoroccoMap() {
  // You can adjust these percentages until cities are in correct spots
  const cities = [
    { name: 'Tanger', top: '10%', left: '62%' },
    { name: 'Rabat', top: '25%', left: '55%' },
    { name: 'Casablanca', top: '35%', left: '50%' },
    { name: 'Marrakech', top: '52%', left: '60%', active: true },
    { name: 'Agadir', top: '72%', left: '48%' }
  ];

  return (
    <div className="morocco-map-container">
      <img 
        src={moroccoMap}
        alt="Carte du Maroc"
        className="map-image orange-map"
      />
      
      {cities.map((city, index) => (
        <div 
          key={city.name}
          className={`city-marker ${city.active ? 'active' : ''}`}
          style={{ top: city.top, left: city.left }}
        >
          <div className="marker-dot"></div>
          <div className={`marker-label ${city.active ? 'active' : ''}`}>
            {city.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoroccoMap;