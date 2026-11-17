// src/views/RecipesView.jsx
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import styles from './RecipesView.module.css';

export default function RecipesView({ recetas, setRecetas }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  
  // Estado para controlar qué receta se muestra en el modal
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  const categorias = ['Todas', 'Desayunos', 'Platos Fuertes', 'Postres'];

  const recetasFiltradas = recetas.filter(receta => {
    const coincideTexto =
      receta.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      receta.categoria.toLowerCase().includes(terminoBusqueda.toLowerCase());
    const coincideCategoria =
      categoriaActiva === 'Todas' || receta.categoria === categoriaActiva;
    return coincideTexto && coincideCategoria;
  });

  const toggleFavorito = (id) => {
    setRecetas(recetas.map(receta => 
      receta.id === id ? { ...receta, favorito: !receta.favorito } : receta
    ));
  };

  return (
    <section className={styles.viewContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Recetario Sazón</h1>
          <p className={styles.subtitle}>
            Explora nuestras preparaciones tradicionales y guarda tus favoritas
          </p>
        </div>

        <div className={styles.controls}>
          <input 
            type="text" 
            placeholder="🔍 Buscar receta..." 
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            className={styles.searchInput}
          />

          <div className={styles.categoryGroup}>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`${styles.categoryBtn} ${
                  categoriaActiva === categoria ? styles.activeCategory : ''
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </div>

      {recetasFiltradas.length === 0 ? (
        <div className={styles.emptyState}>
          No se encontraron recetas en esta categoría o búsqueda.
        </div>
      ) : (
        <div className={styles.recipeGrid}>
          {recetasFiltradas.map(receta => (
            <RecipeCard 
              key={receta.id} 
              receta={receta} 
              onToggleFavorito={toggleFavorito}
              onVerDetalle={setRecetaSeleccionada}
            />
          ))}
        </div>
      )}

      {/* Ventana modal que solo se muestra cuando recetaSeleccionada tiene datos */}
      <RecipeModal 
        receta={recetaSeleccionada} 
        onClose={() => setRecetaSeleccionada(null)} 
      />
    </section>
  );
}