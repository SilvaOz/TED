import '../styles/ServicesSection.css'; // Importa los estilos del componente ServiceSection
import didgeridoo from '../../assets/didg.jpeg';
// import handpan from '../assets/handpan.jpg';
import flute from '../../assets/flauta.jpeg';

const SoundHealingSection = () => {
  return (
    <section className="service-section bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Sound Healing: Una Experiencia de Sanación Profunda</h2>
      <p className="text-lg mb-4">
        En nuestras sesiones de Sound Healing, te invitamos a sumergirte en un viaje de relajación profunda y renovación celular, donde los sonidos terapéuticos te ayudarán a restaurar el equilibrio en tu cuerpo, mente y espíritu.
      </p>
      <p className="text-lg mb-4">
        Nuestros terapeutas expertos combinan una variedad de instrumentos musicales, incluyendo cuencos tibetanos, gongs, tambores chamánicos y flautas nativas, para crear una sinfonía de sonidos que te transportarán a un estado de profunda paz y tranquilidad.
      </p>
      <p className="text-lg mb-4">
        Sound Healing es una terapia alternativa que utiliza la vibración y el sonido para armonizar las ondas cerebrales y crear un estado de relajación profunda. Los sonidos de los instrumentos musicales utilizados en nuestras sesiones tienen frecuencias específicas que pueden ayudar a equilibrar los chakras, reducir el estrés y la ansiedad, aliviar el dolor y mejorar la calidad del sueño.
      </p>
      <p className="text-lg mb-4">
        Los instrumentos que utilizamos en nuestras sesiones de Sound Healing incluyen:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li >
          <img src={didgeridoo} alt="Didgeridoo" className="inline-block mr-2" />
          <strong>Didgeridoo:</strong> Un instrumento de viento tradicional de los aborígenes australianos, utilizado para crear sonidos profundos y rítmicos que pueden ayudar a reducir el estrés y mejorar la respiración.
        </li>
        <li>
          <img src={flute} alt="Flute" className="inline-block mr-2" />
          <strong>Flautas:</strong> Instrumentos de viento que producen sonidos suaves y melodiosos, utilizados para crear una atmósfera tranquila y armoniosa que puede ayudar a calmar la mente y el cuerpo.
        </li>
      </ul>
      <p className="text-lg mb-4">
        Los beneficios de nuestras sesiones de Sound Healing incluyen:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Alivio del estrés y la ansiedad.</li>
        <li>Reducción de la tensión muscular y el dolor.</li>
        <li>Mejora del sueño y la calidad de descanso.</li>
        <li>Aumento de la claridad mental y la concentración.</li>
        <li>Promoción de la sanación emocional y espiritual.</li>
        <li>Desbloqueo de energía estancada y restauración del flujo vital.</li>
      </ul>
      <p className="text-lg mb-4">
        <strong>Detalles de la sesión:</strong>
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Duración: 60 minutos</li>
        <li>Ubicación: Centro de Bienestar Serenidad, Calle Principal 123, Ciudad Tranquila</li>
        <li>Horarios: Consultar disponibilidad</li>
      </ul>
      <p className="text-lg mb-4">
        <strong>Tarifa:</strong> $50 por sesión individual
      </p>
      <p className="text-lg mb-4">
        ¡No se requiere experiencia previa! Nuestras sesiones de Sound Healing están abiertas a todos, desde principiantes hasta practicantes avanzados. Ven y experimenta la magia transformadora del sonido en una experiencia de sanación única y profunda.
      </p>
    </section>
  );
};

export default SoundHealingSection;
