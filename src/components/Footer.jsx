// src/components/Footer.jsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <span className={styles.logo}>🍲 Sazón</span>
          <p className={styles.tagline}>
            Ecosistema gastronómico · Módulo de Recetario y Contenido
          </p>
        </div>

        <span className={styles.monoCopy}>
          © {new Date().getFullYear()} PROYECTO SAZÓN
        </span>
      </div>
    </footer>
  );
}