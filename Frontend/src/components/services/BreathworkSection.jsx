import '../styles/ServicesSection.css'; // Importa los estilos del componente ServiceSection
import breathworkImage from '../../assets/respiracion.jpeg'; // Importa la imagen de breathwork

const BreathworkSection = () => {
  return (

    <section className="service-section">
      <h2>Breathwork: Un Viaje de Transformación Profunda</h2>

      <img src={breathworkImage} alt="respiracion" className="event-image" />

      <p>
        Explora el poder transformador de la respiración consciente en nuestras sesiones especializadas de Breathwork. Guiados por expertos facilitadores, te sumergirás en un viaje profundo de autoexploración y sanación.
      </p>
      <p>
        Nuestro enfoque holístico combina técnicas de respiración ancestrales con música y sonidos envolventes, creando un ambiente propicio para la introspección y la liberación de tensiones físicas, emocionales y mentales.
      </p>
      <p>
        En cada sesión, experimentarás diferentes técnicas de respiración, como la respiración consciente, la respiración circular y la respiración diafragmática. Estas técnicas te ayudarán a conectar con tu cuerpo y a liberar bloqueos energéticos, promoviendo una sensación de paz y bienestar.
      </p>
      <p>
        Además, utilizamos música y sonidos específicos para inducir estados alterados de conciencia y potenciar la experiencia de sanación. Los sonidos de instrumentos como los cuencos tibetanos, los gongs y las flautas nativas crean un ambiente armónico y relajante, facilitando la conexión con tu ser interior.
      </p>
      <p>
        Los beneficios de nuestras sesiones de Breathwork incluyen:
      </p>
      <ul>
        <li>Reducción del estrés y la ansiedad</li>
        <li>Mejora de la claridad mental y la concentración</li>
        <li>Liberación de emociones reprimidas y traumas acumulados</li>
        <li>Aumento de la energía y vitalidad</li>
        <li>Fortalecimiento del sistema inmunológico</li>
        <li>Mejora de la calidad del sueño</li>
        <li>Mayor conexión con uno mismo y con los demás</li>
        <li>Desarrollo de la intuición y la creatividad</li>
        <li>Mejora de la respiración y la postura corporal</li>
      </ul>
      <p>
        Nuestras sesiones de Breathwork son adecuadas para todos los niveles, desde principiantes hasta practicantes avanzados. No se requiere experiencia previa, solo una actitud abierta y curiosa hacia la exploración de tu mundo interior.
      </p>
      <p><strong>Horarios:</strong></p>
      <ul>
        <li>Lunes y Miércoles: 18:00 - 19:30</li>
        <li>Viernes: 10:00 - 11:30</li>
        <li>Sábado y Domingo: 9:00 - 10:30</li>
      </ul>
      <p><strong>Tarifa:</strong> $20 por sesión individual, $150 por paquete de 10 sesiones.</p>
      <p><strong>Ubicación:</strong> Centro de Bienestar Holístico, Calle Principal 123, Ciudad Ecológica.</p>
      <p>
        <strong>Equipo necesario:</strong> Ropa cómoda y una manta para mantener el calor corporal durante la sesión.
      </p>
      <p>
        <strong>Inscripciones:</strong> Puedes reservar tu lugar en línea o llamando al Centro de Bienestar Holístico.
      </p>
      <img src={breathworkImage} alt="Breathwork Image" className="image-center" />
    </section>
  );
};

export default BreathworkSection;
