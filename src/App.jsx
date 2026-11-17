// src/App.jsx
import { useState, useEffect } from 'react';
import { recetasData } from './data/recetas';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RecipesView from './views/RecipesView';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [soloFavoritos, setSoloFavoritos] = useState(false);

  // Simulación de Mock API con promesa al cargar la aplicación
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecetas(recetasData);
      setCargando(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const totalFavoritos = recetas.filter((receta) => receta.favorito).length;

  return (
    <div className={styles.appLayout}>
      <Navbar
        totalFavoritos={totalFavoritos}
        onOpenSidebar={() => setIsSidebarOpen(true)}
        soloFavoritos={soloFavoritos}
        setSoloFavoritos={setSoloFavoritos}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
        soloFavoritos={soloFavoritos}
        setSoloFavoritos={setSoloFavoritos}
        totalFavoritos={totalFavoritos}
      />

      <main className={styles.mainContent}>
        {cargando ? (
          <div className={styles.loaderBox}>
            🍲 Cargando recetario Sazón...
          </div>
        ) : (
          <RecipesView
            recetas={recetas}
            setRecetas={setRecetas}
            categoriaActiva={categoriaActiva}
            setCategoriaActiva={setCategoriaActiva}
            soloFavoritos={soloFavoritos}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}