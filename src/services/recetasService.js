// src/services/recetasService.js
import { recetasData } from '../data/recetas';

export const obtenerRecetasMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recetasData);
    }, 1000); // Simula 1 segundo de carga desde el servidor
  });
};