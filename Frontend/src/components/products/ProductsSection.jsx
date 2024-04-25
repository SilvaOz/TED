import './ProductsSection.css';
import djembeImage from '../../assets/djmbe.jpeg';
import didgeridooImage from '../../assets/didg.jpeg';
import fluteImage from '../../assets/flauta.jpeg';



const ProductSection = () => {
  return (
    <section className="products-section">
      <div className="banner">
        <h2>Nuestros Instrumentos Musicales Exóticos</h2>
        <p>Explora nuestra selección de didgeridoos, tambores y flautas exóticas.</p>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={didgeridooImage} alt="Didgeridoo" />
          <div className="card-content">
            <h3>Didgeridoo</h3>
            <p>Descubre nuestra colección de didgeridoos auténticos.</p>
          </div>
        </div>
        <div className="card">
          <img src={djembeImage} alt="Drums" />
          <div className="card-content">
            <h3>Tambores</h3>
            <p>Explora nuestra variedad de tambores de percusión.</p>
          </div>
        </div>
        <div className="card">
          <img src={fluteImage} alt="Flutes" />
          <div className="card-content">
            <h3>Flautas</h3>
            <p>Sumérgete en el mundo de las flautas exóticas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
