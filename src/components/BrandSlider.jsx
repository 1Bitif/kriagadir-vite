import React from 'react';

const brands = ['LAND ROVER', 'MASERATI', 'SEAT', 'VW', 'RENAULT', 'PEUGEOT', 'HYUNDAI', 'FIAT', 'ALFA ROMEO'];
const icons = ['🚙', '🏎️', '🚗', '🚘', '🚕', '🚙', '🚗', '🚐', '🏎️'];

function BrandSlider() {
  return (
    <section className="brand-logos-section">
      <div className="container">
        <h2 className="brands-title">Nos <span className="highlight">Marques</span> Partenaires</h2>
      </div>
      <div className="brands-slider">
        <div className="brands-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {brands.map((brand, idx) => (
                <div key={idx} className="brand-card">
                  <div className="brand-icon">{icons[idx]}</div>
                  <p className="brand-name">{brand}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;