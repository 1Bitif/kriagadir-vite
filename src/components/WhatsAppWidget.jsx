import React from 'react';
import { whatsappNumber } from '../data/carsData';

function WhatsAppWidget({ showChatWidget, setShowChatWidget }) {
  return (
    <div className="whatsapp-icon-container">
      {!showChatWidget && (
        <button className="whatsapp-icon-btn" onClick={() => setShowChatWidget(true)}>💬</button>
      )}
      {showChatWidget && (
        <div className="chat-widget-popup">
          <button className="chat-widget-close" onClick={() => setShowChatWidget(false)}>✕</button>
          <div className="chat-widget-header">
            <div className="chat-widget-status">
              <span className="status-dot"></span>
              <span>Usually responds in a few minutes</span>
            </div>
            <div className="chat-widget-title">KriAgadir PRESTIGE CARS</div>
            <p className="chat-widget-message">Need a car? Our team is here to help you!</p>
          </div>
          <div className="chat-widget-body">
            <button className="chat-widget-button" onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
              📱 Write to us on WhatsApp
            </button>
            <div className="chat-widget-online">
              <span className="online-dot"></span> Online
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsAppWidget;