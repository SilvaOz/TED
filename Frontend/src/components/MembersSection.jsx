import './styles/MembersSection.css'; // Importamos los estilos del componente MembersSection
import miembro1 from '../assets/miembros1.jpeg';
import miembro2 from '../assets/miembros2.jpeg';

const MembersSection = () => {
  return (
    <section id="members" className="members-section">
      <div className="members-content">
        <h2 className="section-title">Nuestros Integrantes</h2>

        <div className='section-description'>

          <p>¡Bienvenido a nuestra comunidad de Ecstatic Dance! Aquí, en el corazón de nuestra tribu, nos enorgullecemos de celebrar la diversidad y la conexión a través del baile, la música y la espiritualidad.</p>
          <p>Nuestra comunidad está formada por personas apasionadas y comprometidas que comparten la visión de crear un espacio inclusivo y vibrante para la autoexpresión y el crecimiento personal. Desde bailarines entusiastas hasta músicos talentosos, desde curanderos hasta artistas, cada miembro aporta su propia luz y energía única a nuestra familia tribal.</p>
          <p>En esta sección, te invitamos a conocer a algunos de nuestros integrantes destacados:</p>

        </div> <div className="member-cards">
          <div className="member-card">
            <img src={miembro2} alt="Miembro 1" className="member-image" />
            <h3 className="member-name">María López</h3>
            <p className="member-description">Apasionada del baile y la música desde su infancia, María encuentra en el Ecstatic Dance una forma de expresión auténtica y liberadora. Como instructora certificada, comparte su amor por el movimiento y la danza con nuestra comunidad.</p>
          </div>
          <div className="member-card">
            <img src={miembro1} alt="Miembro 2" className="member-image" />
            <h3 className="member-name">José Martínez</h3>
            <p className="member-description">Con más de 10 años de experiencia en prácticas espirituales y de sanación, José es un pilar fundamental de nuestra tribu. Como facilitador de círculos de tambores y ceremonias de cacao, guía a otros en su viaje de autodescubrimiento y transformación.</p>
          </div>
          {/* Agrega más tarjetas de miembros aquí */}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
