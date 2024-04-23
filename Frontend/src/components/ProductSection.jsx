// ProductSection.jsx
import React from 'react';
import './ProductSection.css'; // Importamos los estilos del componente ProductSection

const ProductSection = () => {
  return (
    <section id="products" className="product-section">
      <div className="product-content">
        <h2>Nuestros Productos</h2>
        <div className="product-gallery">
          <div className="product-item">
            <img src="imagen1.jpg" alt="Producto 1" />
            <p>Descripción del producto 1. Cada compra ayuda a las comunidades quechuas del Valle Sagrado proporcionando empleo, educación y apoyo cultural.</p>
          </div>
          <div className="product-item">
            <img src="imagen2.jpg" alt="Producto 2" />
            <p>Descripción del producto 2. Al elegir este producto, estás contribuyendo al desarrollo sostenible de las comunidades locales y preservando sus tradiciones ancestrales.</p>
          </div>
          <div className="product-item">
            <img src="imagen3.jpg" alt="Producto 3" />
            <p>Descripción del producto 3. Cada artículo que adquieras de nosotros ayuda a mejorar la calidad de vida de las familias quechuas y promueve la conservación de su entorno natural.</p>
          </div>
          {/* Agrega más elementos de producto según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
