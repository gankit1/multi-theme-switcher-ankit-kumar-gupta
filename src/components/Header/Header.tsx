import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { currentTheme } = useTheme();
  const location = useLocation();

  return (
    <header className={`${styles.header} ${styles[currentTheme]}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>ThemeSwitch</h1>
        </div>
        
        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
          >
            Contact
          </Link>
        </nav>

        <ThemeSelector />
      </div>
    </header>
  );
};

export default Header;
