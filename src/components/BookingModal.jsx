import React, { useState } from 'react';
import { whatsappNumber } from '../data/carsData';

function BookingModal({ selectedCar, setSelectedCar, setShowModal }) {
  const [rentalData, setRentalData] = useState({
    startDate: '',
    endDate: '',
    extras: { driver: false, babySeat: false, gps: false }
  });

  const calculateTotal = () => {
    if (!selectedCar || !rentalData.startDate || !rentalData.endDate) return 0;
    const days = Math.max(1, Math.ceil((new Date(rentalData.endDate) - new Date(rentalData.startDate)) / (1000 * 60 * 60 * 24)));
    let total = selectedCar.price * days;
    if (rentalData.extras.driver) total += 200 * days;
    if (rentalData.extras.babySeat) total += 30 * days;
    if (rentalData.extras.gps) total += 25 * days;
    return total;
  };

  const handleReservation = () => {
    const days = Math.max(1, Math.ceil((new Date(rentalData.endDate) - new Date(rentalData.startDate)) / (1000 * 60 * 60 * 24)));
    const message = `Bonjour! Je souhaite réserver ${selectedCar.name} du ${rentalData.startDate} au ${rentalData.endDate} (${days} jours) pour ${calculateTotal()}€`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setShowModal(false);
    setSelectedCar(null);
  };

  if (!selectedCar) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
        <h2>Réserver {selectedCar.name}</h2>
        <img src={selectedCar.image} alt={selectedCar.name} className="modal-car-image" />
        <div className="modal-form">
          <div className="form-group">
            <label>📅 Date de début</label>
            <input type="date" value={rentalData.startDate} onChange={(e) => setRentalData({...rentalData, startDate: e.target.value})} min={new Date().toISOString().split('T')[0]} />
          </div>
          <div className="form-group">
            <label>📅 Date de fin</label>
            <input type="date" value={rentalData.endDate} onChange={(e) => setRentalData({...rentalData, endDate: e.target.value})} />
          </div>
          {rentalData.startDate && rentalData.endDate && (
            <div className="price-breakdown"><h4 className="total-price">Total: {calculateTotal()}€</h4></div>
          )}
          <button className="btn-confirm" onClick={handleReservation} disabled={!rentalData.startDate || !rentalData.endDate}>
            📱 Confirmer sur WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;