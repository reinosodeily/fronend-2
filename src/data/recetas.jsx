// src/data/recetas.js
import arepaImg from '../assets/arepa.jpg';
import sancochoImg from '../assets/sancocho.jpg';
import arequipeImg from '../assets/arequipe.jpg';

export const recetasData = [
  {
    id: 1,
    titulo: "Arepa con Queso Asada",
    categoria: "Desayunos",
    tiempo: "15 min",
    descripcion: "Arepa de maíz con hogao y queso campesino fundido.",
    imagen: arepaImg,
    favorito: false,
    ingredientes: [
      "2 tazas de harina de maíz precocida",
      "200g de queso campesino o quesito rallado",
      "1 cucharada de mantequilla",
      "Sal al gusto y agua tibia"
    ],
    preparacion: "Mezcla la harina con el agua tibia, la sal y la mantequilla hasta obtener una masa suave. Arma las arepas, ásalas en la parrilla por ambos lados hasta dorar y cúbrelas con abundante queso."
  },
  {
    id: 2,
    titulo: "Sancocho de Gallina",
    categoria: "Platos Fuertes",
    tiempo: "60 min",
    descripcion: "Sopa tradicional con plátano, yuca, papa y mazorca.",
    imagen: sancochoImg,
    favorito: false,
    ingredientes: [
      "1 gallina o pollo campesino en presas",
      "2 plátanos verdes y 1 libra de yuca",
      "4 papas medianas y 2 mazorcas en trozos",
      "Cilantro fresco, cebolla larga y ajo"
    ],
    preparacion: "Cocina las presas en agua con cebolla y ajo. Agrega la mazorca y el plátano verde troceado con la mano. Incorpora la papa y la yuca hasta que ablanden y sirve con cilantro picado."
  },
  {
    id: 3,
    titulo: "Arequipe Casero",
    categoria: "Postres",
    tiempo: "45 min",
    descripcion: "Dulce de leche tradicional espesado a fuego lento.",
    imagen: arequipeImg,
    favorito: false,
    ingredientes: [
      "1 litro de leche entera",
      "250g de azúcar blanca",
      "1 pizca de bicarbonato de sodio",
      "1 astilla de canela"
    ],
    preparacion: "Hierve la leche con el azúcar, la canela y el bicarbonato a fuego medio-bajo. Revuelve constantemente con cuchara de madera hasta que tome color caramelo y espese."
  }
];
