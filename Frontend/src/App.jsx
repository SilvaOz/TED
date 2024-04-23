
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutSection';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';


import ContactPage from './pages/ContactPage';
import './font/fonts.css';
import ReservationPage from './components/ReservationsSection';
import MembersPage from './pages/MembersPage';
// import './style/styles.css'



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
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path='/members' element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <div className="overlay"></div> {/* Capa de superposición para efectos */}
        <div className="drum-animation"></div> {/* Animación de tambores */}
        <div className="fireworks-animation"></div> {/* Animación de fuegos artificiales */}
      </>
    </Router>

  );
}

export default App;
