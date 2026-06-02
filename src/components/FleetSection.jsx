import React from 'react';
import { vehicles, whatsappNumber, phoneNumber } from '../data/carsData';

function FleetSection({ setSelectedCar, setShowModal }) {
  const handleWhatsApp = (car) => {
    window.open(`https://wa.me/${whatsappNumber}?text=Bonjour! Je souhaite louer ${car.name} (${car.priceText})`, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="fleet" className="fleet">
      <div className="container">
        <h2>Notre Flotte de <span className="highlight">Véhicules de Luxe</span></h2>
        <div className="car-grid">
          {vehicles.slice(0, 6).map(car => (
            <div key={car.id} className="car-card">
              <div className="car-type-badge">{car.type}</div>
              <img src={car.image} alt={car.name} />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p className="car-price">{car.priceText}</p>
                <div className="car-features">
                  <div className="feature"><span>✓</span> Insurance included</div>
                  <div className="feature-details">{car.seats} • {car.fuel} • {car.transmission}</div>
                </div>
                <div className="car-buttons">
                  <button className="btn-book" onClick={() => { setSelectedCar(car); setShowModal(true); }}>Book Now</button>
                  <button className="btn-whatsapp-small" onClick={() => handleWhatsApp(car)}>WhatsApp</button>
                  <button className="btn-call" onClick={handleCallNow}>Call Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FleetSection;