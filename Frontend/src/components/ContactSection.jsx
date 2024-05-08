import './styles/ContactSection.css'; // Importamos los estilos del componente ContactSection
const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Conéctate con Nosotros</h2>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
