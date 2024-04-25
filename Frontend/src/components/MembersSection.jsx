import './styles/MembersSection.css'; // Importamos los estilos del componente MembersSection

const MembersSection = () => {
  return (
    <section id="members" className="members-section">
      <div className="members-content">
        <h2>Nuestros Integrantes</h2>
        <p>¡Bienvenido a nuestra comunidad de Ecstatic Dance! Aquí, en el corazón de nuestra tribu, nos enorgullecemos de celebrar la diversidad y la conexión a través del baile, la música y la espiritualidad.</p>
        <p>Nuestra comunidad está formada por personas apasionadas y comprometidas que comparten la visión de crear un espacio inclusivo y vibrante para la autoexpresión y el crecimiento personal. Desde bailarines entusiastas hasta músicos talentosos, desde curanderos hasta artistas, cada miembro aporta su propia luz y energía única a nuestra familia tribal.</p>
        <p>En esta sección, te invitamos a conocer a algunos de nuestros integrantes destacados:</p>
        <div className="member-cards">
          <div className="member-card">
            <img src="/images/member1.jpg" alt="Miembro 1" />
            <h3>María López</h3>
            <p>Apasionada del baile y la música desde su infancia, María encuentra en el Ecstatic Dance una forma de expresión auténtica y liberadora. Como instructora certificada, comparte su amor por el movimiento y la danza con nuestra comunidad.</p>
          </div>
          <div className="member-card">
            <img src="/images/member2.jpg" alt="Miembro 2" />
            <h3>José Martínez</h3>
            <p>Con más de 10 años de experiencia en prácticas espirituales y de sanación, José es un pilar fundamental de nuestra tribu. Como facilitador de círculos de tambores y ceremonias de cacao, guía a otros en su viaje de autodescubrimiento y transformación.</p>
          </div>
          {/* Agrega más tarjetas de miembros aquí */}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
