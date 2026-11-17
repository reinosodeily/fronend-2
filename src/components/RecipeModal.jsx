// src/components/RecipeModal.jsx
import styles from './RecipeModal.module.css';

export default function RecipeModal({ receta, onClose }) {
  if (!receta) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* stopPropagation evita que el modal se cierre al hacer clic adentro de la caja blanca */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <img 
          src={receta.imagen} 
          alt={receta.titulo} 
          className={styles.modalImage} 
        />

        <div className={styles.modalContent}>
          <div className={styles.badgeRow}>
            <span className={styles.category}>{receta.categoria}</span>
            <span className={styles.time}>⏱️ {receta.tiempo}</span>
          </div>

          <h2 className={styles.title}>{receta.titulo}</h2>

          <h4 className={styles.sectionTitle}>🛒 Ingredientes</h4>
          <ul className={styles.ingredientList}>
            {receta.ingredientes.map((item, index) => (
              <li key={index} className={styles.ingredientItem}>
                {item}
              </li>
            ))}
          </ul>

          <h4 className={styles.sectionTitle}>👩‍🍳 Preparación</h4>
          <p className={styles.preparationText}>{receta.preparacion}</p>
        </div>
      </div>
    </div>
  );
}