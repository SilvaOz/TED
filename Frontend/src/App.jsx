
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutSection';
import ProductsSection from './components/products/ProductsSection';
import ServicesPage from './pages/ServicesPage';
import SoundHealingPage from './components/services/SoundHealingSection';
import BreathworkPage from './components/services/BreathworkSection';
import VeganDinnerPage from './components/services/VeganDinnerSection';
// import SahduBoardPage from './components/services/';
import DidgeridooClassesPage from './components/services/DidgeridooClassesSection';
import DrumsClassesPage from './components/services/DrumsClassesSection';

import ContactPage from './pages/ContactPage';
import './font/fonts.css';
import ReservationPage from './components/ReservationsSection';
import MembersPage from './pages/MembersPage';
import './style/styles.css'



function App() {

  return (

    <Router>
      <>
        <Header />
        {/* <HeroSection /> */}
        <Routes>

          <Route path='/' element={<HeroSection />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path='/services/sound-healing' element={<SoundHealingPage />} />
          <Route path='/services/breathwork' element={<BreathworkPage />} />
          <Route path='/services/vegan-dinner' element={<VeganDinnerPage />} />
          {/* <Route path='/services/sahdu-board' element={<SahduBoardPage />} />  */}
          <Route path='/classes/didgeridoo-classes' element={<DidgeridooClassesPage />} /> 
          <Route path='/classes/drums-classes' element={<DrumsClassesPage />} />

          <Route path="/products/instruments" element={<ProductsSection />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path='/members' element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <div className="overlay"></div> {/* Capa de superposición para efectos */}
        <div className="drum-animation"></div> {/* Animación de tambores */}
        <div className="fireworks-animation"></div> {/* Animación de fuegos artificiales */}
      </>
    </Router >

  );
}

export default App;
