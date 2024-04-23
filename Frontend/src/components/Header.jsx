import './Header.css'; // Importamos los estilos del componente Header
import styles from './Header.module.css'; // Importamos los estilos del componente Header
import { Link } from 'react-router-dom';


// Componente funcional Header
const Header = () => {
  return (
    <header className={styles['fade-in']}>
      <div className="header-container">
        <Link to="/" className={styles.logo}>Tribal Ecstatic Dance</Link>
        <nav>
          <ul>
            <li><Link to="/about">Acerca de nosotros</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/reservations">Reservas</Link></li>
            <li><Link to="/members">Miembros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
