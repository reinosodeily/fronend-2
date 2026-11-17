// src/App.jsx
import { useState, useEffect } from 'react';
import { obtenerRecetasMock } from './services/recetasService';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RecipesView from './views/RecipesView';
import RecipeEditorView from './views/RecipeEditorView';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [vistaActiva, setVistaActiva] = useState('galeria');
  const [recetaEnEdicion, setRecetaEnEdicion] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [soloFavoritos, setSoloFavoritos] = useState(false);

  useEffect(() => {
    obtenerRecetasMock().then((datos) => {
      setRecetas(datos);
      setCargando(false);
    });
  }, []);

  const totalFavoritos = recetas.filter((receta) => receta.favorito).length;

  // Abre el formulario con los datos de la receta seleccionada
  const iniciarEdicion = (receta) => {
    setRecetaEnEdicion(receta);
    setVistaActiva('editor');
  };

  // Guarda tanto una receta editada (map por id) como una receta nueva
  const guardarReceta = (recetaProcesada, esEdicion) => {
    if (esEdicion) {
      setRecetas(
        recetas.map((item) =>
          item.id === recetaProcesada.id ? recetaProcesada : item
        )
      );
    } else {
      setRecetas([recetaProcesada, ...recetas]);
    }
    setRecetaEnEdicion(null);
    setVistaActiva('galeria');
  };

  const cancelarEdicion = () => {
    setRecetaEnEdicion(null);
    setVistaActiva('galeria');
  };

  return (
    <div className={styles.appLayout}>
      <Navbar
        totalFavoritos={totalFavoritos}
        onOpenSidebar={() => setIsSidebarOpen(true)}
        soloFavoritos={soloFavoritos}
        setSoloFavoritos={(valor) => {
          setRecetaEnEdicion(null);
          setVistaActiva('galeria');
          setSoloFavoritos(valor);
        }}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        vistaActiva={vistaActiva}
        setVistaActiva={(nuevaVista) => {
          if (nuevaVista === 'editor') setRecetaEnEdicion(null);
          setVistaActiva(nuevaVista);
        }}
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
        ) : vistaActiva === 'editor' ? (
          <RecipeEditorView
           key={recetaEnEdicion ? recetaEnEdicion.id : 'nueva-receta'}
           recetaAEditar={recetaEnEdicion}
           onSaveRecipe={guardarReceta}
           onCancel={cancelarEdicion}
/>
        ) : (
          <RecipesView
            recetas={recetas}
            setRecetas={setRecetas}
            categoriaActiva={categoriaActiva}
            setCategoriaActiva={setCategoriaActiva}
            soloFavoritos={soloFavoritos}
            onEditarReceta={iniciarEdicion}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}