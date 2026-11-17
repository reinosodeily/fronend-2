// src/views/RecipesView.jsx
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import styles from './RecipesView.module.css';

export default function RecipesView({
  recetas = [],
  setRecetas,
  categoriaActiva = 'Todas',
  setCategoriaActiva,
  soloFavoritos = false
}) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  const categorias = ['Todas', 'Desayunos', 'Platos Fuertes', 'Postres'];

  const recetasFiltradas = recetas.filter((receta) => {
    const coincideTexto =
      receta.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      receta.categoria.toLowerCase().includes(terminoBusqueda.toLowerCase());
    const coincideCategoria =
      categoriaActiva === 'Todas' || receta.categoria === categoriaActiva;
    const coincideFavorito = !soloFavoritos || receta.favorito;

    return coincideTexto && coincideCategoria && coincideFavorito;
  });

  const toggleFavorito = (id) => {
    setRecetas(
      recetas.map((receta) =>
        receta.id === id ? { ...receta, favorito: !receta.favorito } : receta
      )
    );
  };

  return (
    <section className={styles.viewContainer}>
      <div className={styles.heroBanner}>
        <div>
          <span className={styles.heroTag}>MÓDULO RECETARIO Y CONTENIDO</span>
          <h1 className={styles.heroTitle}>
            {soloFavoritos ? 'Mi Colección de Favoritos' : 'Explorador de Recetas Sazón'}
          </h1>
          <p className={styles.heroSubtitle}>
            Preparaciones paso a paso con ingredientes tradicionales y control de favoritos.
          </p>
        </div>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder="🔍 Buscar por plato o categoría..."
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            className={styles.searchInput}
          />

          <div className={styles.categoryPills}>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                type="button"
                onClick={() => setCategoriaActiva && setCategoriaActiva(categoria)}
                className={`${styles.pillBtn} ${
                  categoriaActiva === categoria ? styles.activePill : ''
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </div>

      {recetasFiltradas.length === 0 ? (
        <div className={styles.emptyBox}>
          No se encontraron recetas que coincidan con los filtros seleccionados.
        </div>
      ) : (
        <div className={styles.recipeGrid}>
          {recetasFiltradas.map((receta) => (
            <RecipeCard
              key={receta.id}
              receta={receta}
              onToggleFavorito={toggleFavorito}
              onVerDetalle={setRecetaSeleccionada}
            />
          ))}
        </div>
      )}

      <RecipeModal
        receta={recetaSeleccionada}
        onClose={() => setRecetaSeleccionada(null)}
      />
    </section>
  );
}