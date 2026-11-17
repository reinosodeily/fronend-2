// src/components/Navbar.jsx
import styles from './Navbar.module.css';

export default function Navbar({ totalFavoritos, onOpenSidebar, soloFavoritos, setSoloFavoritos }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftGroup}>
        <button
          type="button"
          onClick={onOpenSidebar}
          className={styles.menuButton}
          aria-label="Abrir menú de navegación"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className={styles.brand}>
          <div className={styles.logoCircle}>🍲</div>
          <div>
            <h2 className={styles.logoTitle}>Sazón</h2>
            <span className={styles.logoSubtitle}>RECETARIO Y CONTENIDO</span>
          </div>
        </div>
      </div>

      <nav className={styles.navActions}>
        <button
          type="button"
          onClick={() => setSoloFavoritos(false)}
          className={`${styles.navBtn} ${!soloFavoritos ? styles.activeNav : ''}`}
        >
          Galería
        </button>

        <button
          type="button"
          onClick={() => setSoloFavoritos(true)}
          className={`${styles.favBadgeBtn} ${soloFavoritos ? styles.activeFavBadge : ''}`}
        >
          <span>❤️ Mi Colección</span>
          <span className={styles.counter}>{totalFavoritos}</span>
        </button>
      </nav>
    </header>
  );
}