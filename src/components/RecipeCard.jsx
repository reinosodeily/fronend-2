// src/components/RecipeCard.jsx
import styles from './RecipeCard.module.css';

export default function RecipeCard({ receta, onToggleFavorito, onVerDetalle }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={receta.imagen} 
          alt={receta.titulo} 
          className={styles.image} 
        />
        <div className={styles.categoryBadge}>{receta.categoria}</div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{receta.titulo}</h3>
        <p className={styles.description}>{receta.descripcion}</p>
        
        <div className={styles.footer}>
          <span className={styles.time}>⏱️ {receta.tiempo}</span>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => onVerDetalle(receta)}
              className={styles.detailButton}
            >
              Ver receta
            </button>

            <button 
              onClick={() => onToggleFavorito(receta.id)}
              className={`${styles.favButton} ${receta.favorito ? styles.active : ''}`}
            >
              {receta.favorito ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}