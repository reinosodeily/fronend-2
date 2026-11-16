
import { useState } from 'react';
import { recetasData } from './data/recetas';
import Navbar from './components/Navbar';
import RecipesView from './views/RecipesView';
import Footer from './components/Footer';

export default function App() {
  const [recetas, setRecetas] = useState(recetasData);
  const totalFavoritos = recetas.filter(receta => receta.favorito).length;

  return (
    <div className="app-container">
      <Navbar totalFavoritos={totalFavoritos} />

      <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', minHeight: '75vh' }}>
        <RecipesView recetas={recetas} setRecetas={setRecetas} />
      </main>

      <Footer />
    </div>
  );
}