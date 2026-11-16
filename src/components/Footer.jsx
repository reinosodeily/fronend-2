// src/components/Footer.jsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>🍲 Sazón</span>
          <p className={styles.tagline}>
            Recetario interactivo con el sabor de nuestra tradición.
          </p>
        </div>

        <div className={styles.links}>
          <a href="#home" className={styles.link}>Inicio</a>
          <a href="#recetas" className={styles.link}>Recetas</a>
          <a href="#favoritos" className={styles.link}>Favoritos</a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Sazón. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}