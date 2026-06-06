import { useState } from "react";
import "./App.css";
import BrandSlider from "./components/pages/BrandSlider";
import FleetSection from "./components/pages/FleetSection";
import Hero from "./components/pages/Hero";
import HowItWorks from "./components/pages/HowItWorks";
import Navbar from "./components/pages/Navbar";
import BookingModal from "./components/pages/BookingModal";
import ContactSection from "./components/pages/ContactSection";
import { Toaster } from "sonner";
import WhatsAppWidget from "./components/pages/WhatsAppWidget";
import Footer from "./components/pages/Footer";

function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false); 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BrandSlider />
      <HowItWorks />
      <FleetSection
        setSelectedCar={setSelectedCar}
        setShowModal={setShowModal}
      />
      <BookingModal 
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ContactSection />
      <WhatsAppWidget 
        showChatWidget={showChatWidget} 
        setShowChatWidget={setShowChatWidget} 
      />
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;