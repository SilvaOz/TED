import '../styles/ServicesSection.css'; // Importa los estilos del componente ServiceSection
import didgeridoo from '../../assets/didgeridooclass.jpeg';
const DidgeridooClassesSection = () => {
  return (
    <section className="service-section">
      <h2>Clases de Didgeridoo</h2>
      <img src={didgeridoo} alt="didgeridoo" className="instrument-image" />

      <p>¡Embárcate en un viaje musical único explorando el arte ancestral de tocar el didgeridoo! Nuestras clases te introducirán en la fascinante cultura aborigen australiana mientras aprendes las técnicas básicas y avanzadas para dominar este instrumento tradicional.</p>
      <p>Impartidas por músicos experimentados y apasionados por la cultura aborigen, nuestras clases ofrecen una experiencia educativa y divertida para todos los niveles, desde principiantes hasta músicos avanzados.</p>
      <p>Beneficios de nuestras clases de Didgeridoo:</p>
      <ul>
        <li>Aprende técnicas básicas como el sonido continuo, la respiración circular y el ritmo.</li>
        <li>Descubre la historia y la cultura detrás del didgeridoo y su importancia en las tradiciones aborígenes.</li>
        <li>Explora diferentes estilos musicales y técnicas de improvisación para expresar tu creatividad.</li>
        <li>Desarrolla la concentración, la coordinación y la respiración consciente.</li>
        <li>Conéctate con una comunidad de amantes de la música y la cultura aborigen.</li>
      </ul>
      <p><strong>Horarios:</strong></p>
      <ul>
        <li>Martes y Jueves: 17:00 - 18:30</li>
        <li>Sábado: 10:00 - 12:00</li>
      </ul>
      <p><strong>Tarifa:</strong> $25 por clase individual, $200 por paquete de 10 clases.</p>
      <p><strong>Ubicación:</strong> Escuela de Música Armonía, Avenida Principal 456, Ciudad Cultural.</p>
      {/* Puedes agregar más detalles sobre inscripciones, requisitos, equipo necesario, etc. */}
    </section>
  );
};

export default DidgeridooClassesSection;
