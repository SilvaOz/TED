import '../styles/ServicesSection.css'; // Importa los estilos del componente ServiceSection
import batucada from '../../assets/batucada.jpeg';

const DrumsClassesSection = () => {
  return (
    <section className="service-section">
    <h2>Clases de Batucada</h2>
    <img src={batucada} alt="batucada" className="instrument-image" />

    <p>¡Únete a nosotros para explorar el poder y la emoción de la percusión en nuestras clases de Batucada! En cada sesión, te embarcarás en un viaje de ritmos tribales y técnicas de percusión de todo el mundo.</p>
    <p>Nuestros instructores expertos te guiarán a través de una variedad de estilos y géneros musicales, desde ritmos africanos y latinoamericanos hasta la Batucada brasileña y más. Aprenderás a tocar diferentes tipos de tambores e instrumentos de percusión, desarrollando tu coordinación, habilidades rítmicas y creatividad musical.</p>
    <p>Detalles de las Clases de Batucada:</p>
    <ul>
      <li>Ubicación: Patio La Caballeriza, Sector Ayllupampa frente al restaurante Muña</li>
      <li>Horario: Todos los martes y viernes de 15:00 a 17:00 horas</li>
      <li>Tarifa: $30 por clase individual / $100 por paquete de 4 clases</li>
    </ul>
    <p>¡No se requiere experiencia previa! Nuestras clases están abiertas a todos, desde principiantes hasta músicos experimentados que buscan expandir sus habilidades y conocimientos. Únete a nuestra comunidad de ritmo y percusión, y descubre la alegría de hacer música juntos.</p>
  </section>
  
  );
};

export default DrumsClassesSection;
