import './styles/ReservationsSection.css'; // Importamos los estilos del componente ReservationsSection

const ReservationsSection = () => {
  return (
    <section id="reservations" className="reservations-section">
      <div className="reservations-content">
        <h2>Reserva Tu Lugar</h2>
        <p>¡Haz tu reserva ahora y únete a nuestra comunidad de Ecstatic Dance!</p>
        <div className="reservation-form">
          <h3>Próximos Eventos</h3>
          <ul>
            <li>
              <h4>Retiro de Ecstatic Dance en el Valle Sagrado</h4>
              <p><strong>Fecha:</strong> Del 15 al 20 de Julio de 2024</p>
              <p><strong>Ubicación:</strong> Eco Resort &quot;Pachamama&quot; Valle Sagrado, Perú</p>
              <p><strong>Descripción:</strong> Únete a nosotros en un viaje transformador hacia la expansión de la conciencia a través de la danza, la música y la conexión con la naturaleza.</p>
            </li>
            <li>
              <h4>Noche de Ecstatic Dance en la Playa</h4>
              <p><strong>Fecha:</strong> 28 de Agosto de 2024</p>
              <p><strong>Ubicación:</strong> Playa El Paraiso, Tulum, México</p>
              <p><strong>Descripción:</strong> Celebra la vida, la libertad y el amor en una noche llena de ritmo y magia en la hermosa playa de Tulum.</p>
            </li>
          </ul>
          <h3>Completa el Formulario para Reservar</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="event">Selecciona el Evento:</label>
              <select id="event" name="event" required>
                <option value="">Selecciona un evento</option>
                <option value="valle-sagrado">Retiro en el Valle Sagrado</option>
                <option value="playa-tulum">Noche en la Playa de Tulum</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje Adicional:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Enviar Reserva</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationsSection;
