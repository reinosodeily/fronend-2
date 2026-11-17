// src/components/RecipeModal.jsx
import styles from './RecipeModal.module.css';

export default function RecipeModal({ receta, onClose }) {
  if (!receta) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.modalCircleImg}>
            <img src={receta.imagen} alt={receta.titulo} className={styles.image} />
          </div>

          <div>
            <span className={styles.badge}>{receta.categoria}</span>
            <h2 className={styles.title}>{receta.titulo}</h2>
            <span className={styles.meta}>⏱️ {receta.tiempo} · {receta.calorias || 'Tradicional'}</span>
          </div>
        </div>

        <div className={styles.modalContent}>
          <h4 className={styles.sectionTitle}>🛒 Ingredientes</h4>
          <ul className={styles.ingredientList}>
            {receta.ingredientes.map((ing, index) => (
              <li key={index} className={styles.ingredientItem}>
                {ing}
              </li>
            ))}
          </ul>

          <h4 className={styles.sectionTitle}>👩‍🍳 Preparación Paso a Paso</h4>
          <p className={styles.preparation}>{receta.preparacion}</p>
        </div>
      </div>
    </div>
  );
}