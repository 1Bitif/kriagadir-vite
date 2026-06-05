import './App.css'
import Hero from './components/pages/Hero'
import Navbar from './components/pages/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
     <Hero />
       {/* <BrandSlider />
      <HowItWorks />
      <FleetSection setSelectedCar={setSelectedCar} />
      <ContactSection />
      <WhatsAppWidget showChatWidget={showChatWidget} setShowChatWidget={setShowChatWidget} />
      <BookingModal selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
      <Footer /> */}
    </div>
  );
}

export default App;
