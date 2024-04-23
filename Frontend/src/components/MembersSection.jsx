// MembersSection.jsx
import React from 'react';
import './MembersSection.css'; // Importamos los estilos del componente MembersSection

const MembersSection = () => {
  return (
    <section id="members" className="members-section">
      <div className="members-content">
        <h2>Nuestros Integrantes</h2>
        <p>Conoce a los miembros de nuestra comunidad de Ecstatic Dance.</p>
        {/* Aquí puedes agregar más contenido sobre los integrantes */}
      </div>
    </section>
  );
};

export default MembersSection;
