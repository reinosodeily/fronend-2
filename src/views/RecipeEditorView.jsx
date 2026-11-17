// src/views/RecipeEditorView.jsx
import { useState } from 'react';
import arepaImg from '../assets/arepa.jpg';
import sancochoImg from '../assets/sancocho.jpg';
import arequipeImg from '../assets/arequipe.jpg';
import styles from './RecipeEditorView.module.css';

export default function RecipeEditorView({
  recetaAEditar = null,
  onSaveRecipe,
  onCancel
}) {
  // Inicializamos directamente desde recetaAEditar sin necesidad de useEffect
  const [titulo, setTitulo] = useState(recetaAEditar?.titulo || '');
  const [categoria, setCategoria] = useState(recetaAEditar?.categoria || 'Platos Fuertes');
  const [tiempo, setTiempo] = useState(recetaAEditar?.tiempo || '30 min');
  const [calorias, setCalorias] = useState(recetaAEditar?.calorias || '350 kcal');
  const [descripcion, setDescripcion] = useState(recetaAEditar?.descripcion || '');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(recetaAEditar?.imagen || arepaImg);
  const [ingredientesTexto, setIngredientesTexto] = useState(
    Array.isArray(recetaAEditar?.ingredientes)
      ? recetaAEditar.ingredientes.join('\n')
      : ''
  );
  const [preparacion, setPreparacion] = useState(recetaAEditar?.preparacion || '');

  const imagenesDisponibles = [
    { nombre: 'Arepa', src: arepaImg },
    { nombre: 'Sancocho', src: sancochoImg },
    { nombre: 'Arequipe', src: arequipeImg }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !descripcion.trim() || !preparacion.trim()) return;

    const listaIngredientes = ingredientesTexto
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item !== '');

    const recetaProcesada = {
      id: recetaAEditar ? recetaAEditar.id : Date.now(),
      titulo: titulo.trim(),
      categoria,
      tiempo: tiempo.trim() || '25 min',
      calorias: calorias.trim() || '350 kcal',
      descripcion: descripcion.trim(),
      imagen: imagenSeleccionada,
      favorito: recetaAEditar ? recetaAEditar.favorito : false,
      ingredientes:
        listaIngredientes.length > 0
          ? listaIngredientes
          : ['Ingredientes tradicionales al gusto'],
      preparacion: preparacion.trim()
    };

    onSaveRecipe(recetaProcesada, Boolean(recetaAEditar));
  };

  return (
    <section className={styles.editorContainer}>
      <div className={styles.headerBanner}>
        <div>
          <span className={styles.tagMono}>
            {recetaAEditar ? 'MÓDULO DE EDICIÓN · RECETARIO' : 'MÓDULO EDITOR DE RECETAS'}
          </span>
          <h1 className={styles.title}>
            {recetaAEditar ? `Editar: ${recetaAEditar.titulo}` : 'Crear Nueva Receta Sazón'}
          </h1>
          <p className={styles.subtitle}>
            {recetaAEditar
              ? 'Modifica los ingredientes, tiempos o pasos de la preparación seleccionada.'
              : 'Completa los campos para agregar una preparación al estado local del recetario.'}
          </p>
        </div>

        <button type="button" onClick={onCancel} className={styles.backBtn}>
          ← Volver a la Galería
        </button>
      </div>

      <div className={styles.editorGrid}>
        <form onSubmit={handleSubmit} className={styles.formCard}>
          <div className={styles.row}>
            <label className={styles.label}>
              Título del plato *
              <input
                type="text"
                required
                placeholder="Ej. Empanadas de Pipián"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className={styles.input}
              />
            </label>

            <label className={styles.label}>
              Categoría *
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className={styles.input}
              >
                <option value="Desayunos">Desayunos</option>
                <option value="Platos Fuertes">Platos Fuertes</option>
                <option value="Postres">Postres</option>
              </select>
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.label}>
              Tiempo de preparación
              <input
                type="text"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                className={styles.input}
              />
            </label>

            <label className={styles.label}>
              Calorías
              <input
                type="text"
                value={calorias}
                onChange={(e) => setCalorias(e.target.value)}
                className={styles.input}
              />
            </label>
          </div>

          <label className={styles.label}>
            Descripción corta *
            <input
              type="text"
              required
              placeholder="Resumen del plato tradicional..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className={styles.input}
            />
          </label>

          <div className={styles.label}>
            <span>Fotografía asociada (src/assets)</span>
            <div className={styles.presetGroup}>
              {imagenesDisponibles.map((img) => (
                <button
                  key={img.nombre}
                  type="button"
                  onClick={() => setImagenSeleccionada(img.src)}
                  className={`${styles.presetBtn} ${
                    imagenSeleccionada === img.src ? styles.presetActive : ''
                  }`}
                >
                  {img.nombre}
                </button>
              ))}
            </div>
          </div>

          <label className={styles.label}>
            Ingredientes (uno por línea) *
            <textarea
              rows="4"
              required
              placeholder="2 tazas de maíz&#10;200g de queso campesino"
              value={ingredientesTexto}
              onChange={(e) => setIngredientesTexto(e.target.value)}
              className={styles.textarea}
            />
          </label>

          <label className={styles.label}>
            Preparación paso a paso *
            <textarea
              rows="4"
              required
              placeholder="Describe cómo preparar la receta..."
              value={preparacion}
              onChange={(e) => setPreparacion(e.target.value)}
              className={styles.textarea}
            />
          </label>

          <div className={styles.actions}>
            <button type="button" onClick={onCancel} className={styles.cancelBtn}>
              Cancelar
            </button>
            <button type="submit" className={styles.submitBtn}>
              {recetaAEditar ? 'Actualizar Receta' : 'Guardar en el Recetario'}
            </button>
          </div>
        </form>

        <aside className={styles.previewCard}>
          <span className={styles.tagMono}>VISTA PREVIA CIRCULAR</span>
          <div className={styles.circlePreview}>
            <img src={imagenSeleccionada} alt="Vista previa" className={styles.previewImg} />
          </div>
          <h3 className={styles.previewTitle}>{titulo || 'Título de tu receta'}</h3>
          <p className={styles.previewDesc}>
            {descripcion || 'Aquí verás la descripción de tu plato mientras escribes.'}
          </p>
          <span className={styles.previewMeta}>⏱️ {tiempo} · {categoria}</span>
        </aside>
      </div>
    </section>
  );
}