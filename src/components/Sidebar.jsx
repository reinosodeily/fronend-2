// src/components/Sidebar.jsx
import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({
  isOpen,
  onClose,
  categoriaActiva,
  setCategoriaActiva,
  soloFavoritos,
  setSoloFavoritos,
  totalFavoritos
}) {
  const [openSection, setOpenSection] = useState('recetario');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const seleccionarCategoria = (cat) => {
    setSoloFavoritos(false);
    setCategoriaActiva(cat);
    onClose();
  };

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`}
        onClick={onClose}
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brandGroup}>
            <span className={styles.brandIcon}>🍲</span>
            <div>
              <h3 className={styles.brandName}>Sazón</h3>
              <span className={styles.cellTag}>CÉLULA 2 · RECETARIO</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <div className={styles.menuList}>
          {/* Acordeón 1: Recetario y Contenido */}
          <div className={styles.menuSection}>
            <button
              type="button"
              onClick={() => toggleSection('recetario')}
              className={styles.accordionHeader}
            >
              <span>📖 Recetario y Contenido</span>
              <span className={styles.chevron}>{openSection === 'recetario' ? '▾' : '▸'}</span>
            </button>

            {openSection === 'recetario' && (
              <div className={styles.subMenu}>
                <button
                  type="button"
                  onClick={() => {
                    setSoloFavoritos(false);
                    onClose();
                  }}
                  className={`${styles.subMenuItem} ${!soloFavoritos ? styles.activeSubItem : ''}`}
                >
                  <span>Galería de Recetas</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSoloFavoritos(true);
                    onClose();
                  }}
                  className={`${styles.subMenuItem} ${soloFavoritos ? styles.activeSubItem : ''}`}
                >
                  <span>Mi Colección (Favoritos)</span>
                  <span className={styles.sideBadge}>{totalFavoritos}</span>
                </button>
              </div>
            )}
          </div>

          {/* Acordeón 2: Filtro por Categoría */}
          <div className={styles.menuSection}>
            <button
              type="button"
              onClick={() => toggleSection('categorias')}
              className={styles.accordionHeader}
            >
              <span>🏷️ Filtro por Categoría</span>
              <span className={styles.chevron}>{openSection === 'categorias' ? '▾' : '▸'}</span>
            </button>

            {openSection === 'categorias' && (
              <div className={styles.subMenu}>
                {['Todas', 'Desayunos', 'Platos Fuertes', 'Postres'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => seleccionarCategoria(cat)}
                    className={`${styles.subMenuItem} ${
                      categoriaActiva === cat && !soloFavoritos ? styles.activeSubItem : ''
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Acordeón 3: Ecosistema Sazón */}
          <div className={styles.menuSection}>
            <button
              type="button"
              onClick={() => toggleSection('ecosistema')}
              className={styles.accordionHeader}
            >
              <span>🧭 Ecosistema Sazón</span>
              <span className={styles.chevron}>{openSection === 'ecosistema' ? '▾' : '▸'}</span>
            </button>

            {openSection === 'ecosistema' && (
              <div className={styles.subMenu}>
                <button type="button" onClick={onClose} className={styles.subMenuItem}>
                  <span>Dashboard Principal</span>
                </button>
                <button type="button" onClick={onClose} className={styles.subMenuItem}>
                  <span>Planificador Semanal</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <span className={styles.footerMono}>KIT DE MARCA SAZÓN</span>
        </div>
      </aside>
    </>
  );
}