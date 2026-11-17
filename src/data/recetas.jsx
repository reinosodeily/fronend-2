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
  },
  {
    id: 4,
    titulo: "Calentado Antioqueño",
    categoria: "Desayunos",
    tiempo: "20 min",
    porciones: "2 porciones",
    calorias: "490 kcal",
    proteina: "21g prot",
    descripcion: "Mezcla tradicional de fríjoles rojos y arroz sofritos en hogao casero, acompañado de plátano maduro, huevo y arepa.",
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    favorito: false,
    ingredientes: [
      "2 tazas de fríjoles rojos cocidos con su caldo",
      "1 taza y media de arroz blanco del día anterior",
      "4 cucharadas de hogao de tomate y cebolla",
      "2 huevos criollos y tajadas de plátano maduro",
      "Cilantro fresco picado y sal al gusto"
    ],
    pasos: [
      "Sofríe el hogao en una sartén amplia a fuego medio durante 2 minutos para activar su aroma.",
      "Agrega los fríjoles con un poco de su tinta y el arroz blanco, integrando con movimientos envolventes.",
      "Deja que la preparación tome consistencia jugosa durante 8 minutos y sirve acompañado de huevo frito y maduro."
    ]
  }
];
