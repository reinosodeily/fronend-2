// src/views/RecipesView.jsx
import { useState } from 'react';
import { recetasData } from '../data/recetas';
import RecipeCard from '../components/RecipeCard';

export default function RecipesView() {
  // Estado 1: Almacena las recetas (inicializadas con los datos estáticos)
  const [recetas, setRecetas] = useState(recetasData);
  
  // Estado 2: Controla lo que el usuario escribe en el buscador
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // Función para filtrar las recetas basándose en el estado de búsqueda
  const recetasFiltradas = recetas.filter(receta =>
    receta.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
    receta.categoria.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // Función para alternar el estado de favorito de una receta específica
  const toggleFavorito = (id) => {
    setRecetas(recetas.map(receta => 
      receta.id === id ? { ...receta, favorito: !receta.favorito } : receta
    ));
  };

  return (
    <div className="recipes-view">
      <h1>Nuestras Recetas</h1>
      
      {/* Input vinculado al estado de búsqueda */}
      <input 
        type="text" 
        placeholder="Buscar receta o categoría..." 
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
      />

      {/* Contenedor de la lista de tarjetas */}
      <div className="recipe-grid">
        {recetasFiltradas.map(receta => (
          <RecipeCard 
            key={receta.id} 
            receta={receta} 
            onToggleFavorito={toggleFavorito} 
          />
        ))}
      </div>
    </div>
  );
}