import './styles/Header.css'; // Importamos los estilos del componente Header
import styles from './styles/Header.module.css'; // Importamos los estilos del componente Header
import { Link } from 'react-router-dom';
import BasicDemo from './navbar/navbar';


// Componente funcional Header
const Header = () => {
  return (
    <header className={styles['fade-in']}>
      <div className="header-container">
        <Link to="/" className={styles.logo}>Tribal Ecstatic Dance</Link>
        <nav>
          <ul>
            <li><BasicDemo /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
