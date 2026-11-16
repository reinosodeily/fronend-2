// src/components/Navbar.jsx
import styles from './Navbar.module.css';

export default function Navbar({ totalFavoritos }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <span className={styles.logoIcon}>🍲</span>
        <h2 className={styles.logoText}>Sazón</h2>
      </div>
      
      <nav className={styles.navLinks}>
        <a href="#home" className={styles.navLink}>Inicio</a>
        <a href="#recetas" className={styles.navLink}>Recetas</a>
        <div className={styles.badgeContainer}>
          <span>❤️ Favoritos</span>
          <span className={styles.counter}>{totalFavoritos}</span>
        </div>
      </nav>
    </header>
  );
}