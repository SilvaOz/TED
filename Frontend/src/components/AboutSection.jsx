import './styles/AboutSection.css'; // Importamos los estilos del componente AboutSection
import mamita from '../assets/mamita.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>Explora el Mundo de Tribal Ecstatic Drums</h2>

        <p>
          En Tribal Ecstatic Drums, no solo creamos tambores; también creamos didgeridoos, flautas y otros instrumentos. Somos un puente entre el mundo tangible y el reino espiritual. Nuestros instrumentos son mucho más que simples herramientas; son portales que nos conectan con nuestras raíces ancestrales, despertando la energía primordial que yace latente en nuestro interior.
        </p>
        <p>
          Desde tiempos inmemoriales, los instrumentos musicales han sido utilizados como herramientas de sanación, trascendencia y celebración en culturas de todo el mundo. En la tradición de los pueblos indígenas, son considerados como medios de comunicación con los espíritus, canalizando la sabiduría ancestral y fomentando la conexión con la naturaleza y con nosotros mismos.
        </p>
        <p>
          En nuestro santuario de sonidos sagrados, cada instrumento es cuidadosamente elaborado con materiales naturales y bendecido con la intención de llevar a quienes lo tocan a un estado de éxtasis y trance. Desde los pulsantes latidos de los didgeridoos hasta las melodías suaves de las flautas, cada sonido es un eco de las civilizaciones antiguas y un recordatorio de nuestra interconexión universal.
        </p>
        <p>
          Más allá de la música, Tribal Ecstatic Drums es un movimiento, una tribu global de buscadores de verdad y amantes del ritmo que se unen en la danza y la celebración. A través de nuestros eventos, talleres y sesiones de música en vivo, te invitamos a unirte a nosotros en este viaje de autoexploración, transformación y conexión con la esencia misma de la vida.
        </p>
        <h3>Nuestra Misión</h3>
        <p>
          En Tribal Ecstatic Drums, nos comprometemos a apoyar a las comunidades locales a través de nuestros eventos. Un porcentaje de las ganancias de cada evento se destina a proyectos de apoyo comunitario, que incluyen la preservación de la cultura tradicional, como la textilería, la pintura, la cerámica y otros tipos de arte que se están perdiendo. Cada compra de nuestros instrumentos también contribuye a este objetivo, ayudando a que las comunidades se motiven y prosperen a través de su arte y cultura.
        </p>
        <img src={mamita} alt="mamita" className="event-image" />

      </div>
    </section>
  );
};

export default AboutSection;
