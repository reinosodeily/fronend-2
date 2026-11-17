
// src/App.jsx
import { useState, useEffect } from 'react';
import { obtenerRecetasMock } from './services/recetasService';
import Navbar from './components/Navbar';
import RecipesView from './views/RecipesView';
import Footer from './components/Footer';

export default function App() {
  // 1. El estado ahora inicia vacío esperando la respuesta de la API
  const [recetas, setRecetas] = useState([]);
  
  // 2. Estado para controlar la pantalla de carga
  const [cargando, setCargando] = useState(true);

  // 3. useEffect ejecuta la petición una sola vez cuando carga la página
  useEffect(() => {
    obtenerRecetasMock().then((datosRecibidos) => {
      setRecetas(datosRecibidos);
      setCargando(false);
    });
  }, []);

  const totalFavoritos = recetas.filter(receta => receta.favorito).length;

  return (
    <div className="app-container">
      <Navbar totalFavoritos={totalFavoritos} />

      <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', minHeight: '75vh' }}>
        {cargando ? (
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#16a34a', marginTop: '48px', fontWeight: '600' }}>
            🍲 Cargando recetas de Sazón...
          </p>
        ) : (
          <RecipesView recetas={recetas} setRecetas={setRecetas} />
        )}
      </main>

      <Footer />
    </div>
  );
}