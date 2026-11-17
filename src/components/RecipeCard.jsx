// src/components/RecipeCard.jsx
import styles from './RecipeCard.module.css';

export default function RecipeCard({
  receta,
  onToggleFavorito,
  onVerDetalle,
  onEditarReceta
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.categoryBadge}>{receta.categoria}</span>

        <button
          type="button"
          onClick={() => onToggleFavorito(receta.id)}
          className={`${styles.favBtn} ${receta.favorito ? styles.favActive : ''}`}
          aria-label="Marcar como favorito"
        >
          {receta.favorito ? '❤️' : '🤍'}
        </button>
      </div>

      <div className={styles.circleWrapper}>
        <img
          src={receta.imagen}
          alt={receta.titulo}
          className={styles.circleImage}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{receta.titulo}</h3>
        <p className={styles.description}>{receta.descripcion}</p>

        <div className={styles.cardFooter}>
          <span className={styles.metaTime}>⏱️ {receta.tiempo}</span>

          <div className={styles.actionGroup}>
            <button
              type="button"
              onClick={() => onEditarReceta(receta)}
              className={styles.editBtn}
              aria-label={`Editar ${receta.titulo}`}
            >
              ✏️ Editar
            </button>

            <button
              type="button"
              onClick={() => onVerDetalle(receta)}
              className={styles.detailBtn}
            >
              Ver receta
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}