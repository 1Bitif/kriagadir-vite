import React, { useState, useEffect } from 'react';
import './App.css';

// Import Components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BrandSlider from './components/BrandSlider.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FleetSection from './components/FleetSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';
import BookingModal from './components/BookingModal.jsx';
import Footer from './components/Footer.jsx';

// Rest of your App.js code...
function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll('.car-card, .step, .brand-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar smoothScroll={smoothScroll} />
      <Hero />
      <BrandSlider />
      <HowItWorks />
      <FleetSection setSelectedCar={setSelectedCar} setShowModal={setShowModal} />
      <ContactSection />
      <WhatsAppWidget showChatWidget={showChatWidget} setShowChatWidget={setShowChatWidget} />
      <BookingModal selectedCar={selectedCar} setSelectedCar={setSelectedCar} setShowModal={setShowModal} />
      <Footer />
    </div>
  );
}

export default App;