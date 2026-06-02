import React from 'react';
import { whatsappNumber, phoneNumber } from '../data/carsData';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Contactez-Nous</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3>📱 Réservez sur WhatsApp</h3>
              <a href={`https://wa.me/${whatsappNumber}`} className="btn-whatsapp" target="_blank">Envoyer un message</a>
            </div>
            <div className="contact-item">
              <h3>📍 Agadir, Maroc</h3>
              <a href={`tel:${phoneNumber}`} className="phone-link">{phoneNumber}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;