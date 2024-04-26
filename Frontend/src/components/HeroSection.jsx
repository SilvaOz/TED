import './styles/HeroSection.css'; // Importamos los estilos del componente HeroSection
import styles from './styles/HeroSection.module.css'; // Importamos los estilos del componente HeroSection

const HeroSection = () => {
  return (
    <section className={styles['fade-in']}>
      <div className='hero'>
        <div className='hero-content'> {/* Agregamos la clase 'content' para los estilos adicionales */}
          {/* <h2>Bienvenido a Tribal Ecstatic Drums</h2> */}
          {/* <p>Descubre la magia de los tambores éxtasis y únete a nuestra comunidad.</p> */}
          {/* <a href="#products" className="cta-button">Ver Productos</a> */}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
