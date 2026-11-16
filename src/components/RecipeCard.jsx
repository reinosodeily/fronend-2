// src/components/RecipeCard.jsx
import styles from './RecipeCard.module.css';

export default function RecipeCard({ receta, onToggleFavorito }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Aquí puedes mostrar la imagen estática o un placeholder */}
        <div className={styles.categoryBadge}>{receta.categoria}</div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{receta.titulo}</h3>
        <p className={styles.description}>{receta.descripcion}</p>
        
        <div className={styles.footer}>
          <span className={styles.time}>⏱️ {receta.tiempo}</span>
          
          {/* Botón interactivo que actualiza el estado local del padre */}
          <button 
            onClick={() => onToggleFavorito(receta.id)}
            className={`${styles.favButton} ${receta.favorito ? styles.active : ''}`}
          >
            {receta.favorito ? '❤️ Favorito' : '🤍 Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
}