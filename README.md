# 🍲 Sazón — Módulo de Recetario y Contenido (Momento 1)

Aplicación web desarrollada en **React + Vite** para el ecosistema gastronómico **Sazón**. Traslada el diseño estático de los wireframes a una arquitectura modular basada en componentes funcionales reutilizables, manejo de estados locales (`useState`, `useEffect`) y **CSS Modules** bajo las reglas del Kit de Marca oficial.

---

## 📋 Historia de Usuario en Común (HU-001)

* **ID:** HU-001
* **Título:** Gestión, exploración y edición de recetas en el ecosistema Sazón
* **Módulo:** Célula 2 — Recetario y Contenido

> **Como** usuario cocinero y miembro del ecosistema Sazón,  
> **quiero** explorar un catálogo de recetas filtrables por categoría y texto, marcar mis preparaciones favoritas, consultar los ingredientes y pasos detallados, y crear o editar recetas mediante un editor visual con barra de despliegue lateral,  
> **para** organizar mi recetario de manera rápida, intuitiva y alineada con la identidad visual de Sazón.

### ✅ Criterios de Aceptación y Ubicación de Componentes

| Criterio de Aceptación | Componente(s) Responsable(s) | Ubicación en el Proyecto |
| :--- | :--- | :--- |
| **1. Navegación y Barra Lateral Superpuesta:** Al pulsar el botón de menú en la barra superior, se despliega el menú lateral en Verde Hoja con fondo difuminado (`backdrop-filter: blur(6px)`) y secciones tipo acordeón para navegar entre vistas y categorías. | `Navbar.jsx`<br>`Sidebar.jsx` | `src/components/Navbar.jsx`<br>`src/components/Sidebar.jsx` |
| **2. Galería y Filtrado en Tiempo Real:** El catálogo renderiza tarjetas con fotografía circular (`border-radius: 50%`) y filtra recetas por barra de búsqueda, categoría (`Todas`, `Desayunos`, `Platos Fuertes`, `Postres`) o colección de favoritos. | `RecipesView.jsx`<br>`RecipeCard.jsx` | `src/views/RecipesView.jsx`<br>`src/components/RecipeCard.jsx` |
| **3. Gestión de Favoritos y Vista Detallada:** Permite marcar/desmarcar recetas como favoritas actualizando el contador dinámico en el encabezado y abrir una ventana modal con ingredientes y preparación paso a paso. | `RecipeCard.jsx`<br>`RecipeModal.jsx`<br>`Navbar.jsx` | `src/components/RecipeCard.jsx`<br>`src/components/RecipeModal.jsx` |
| **4. Creación y Edición de Recetas:** El editor permite registrar nuevas recetas o editar preparaciones existentes mediante formularios controlados y vista previa circular en tiempo real, actualizando el estado local sin mutar el arreglo original. | `RecipeEditorView.jsx` | `src/views/RecipeEditorView.jsx` |
| **5. Cierre Institucional:** Muestra el pie de página corporativo manteniendo la jerarquía tipográfica y cromática del sistema. | `Footer.jsx` | `src/components/Footer.jsx` |

---

## 🗂️ Estructura de Carpetas y Árbol de Componentes

```text
momento1/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css                    # Estilos globales y carga de fuentes Google Fonts
    ├── App.jsx                      # Componente raíz y orquestador de estados locales
    ├── App.module.css               # Layout principal sin estilos en línea
    ├── assets/                      # Recursos gráficos estáticos
    │   ├── arepa.jpg
    │   ├── sancocho.jpg
    │   └── arequipe.jpg
    ├── data/                        # Datos estáticos iniciales
    │   └── recetas.js
    ├── services/                    # Simulación de carga asíncrona (Mock API)
    │   └── recetasService.js
    ├── components/                  # Componentes reutilizables + CSS Modules
    │   ├── Navbar.jsx
    │   ├── Navbar.module.css
    │   ├── Sidebar.jsx
    │   ├── Sidebar.module.css
    │   ├── RecipeCard.jsx
    │   ├── RecipeCard.module.css
    │   ├── RecipeModal.jsx
    │   ├── RecipeModal.module.css
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── views/                       # Vistas principales de la aplicación
        ├── RecipesView.jsx
        ├── RecipesView.module.css
        ├── RecipeEditorView.jsx
        └── RecipeEditorView.module.css

        
        🎨 Implementación del Kit de Marca Sazón

    Colores Oficiales:

        Verde Hoja (Primario / Sidebar / Acciones): #3D8E33

        Marfil (Fondo de interfaz / Tarjetas interiores): #F4F4E8

        Cacao (Textos principales / Footer / Bordes): #643B22

    Tipografías:

        Títulos (h1 - h4): Poppins

        Cuerpo e interfaz: Inter

        Etiquetas técnicas, contadores y tiempos: IBM Plex Mono

    Estilos: Implementación exclusiva mediante CSS Modules (.module.css) con cero estilos en línea (style={{...}}).   
    WhatsApp Image 2026-11-12 at 4.42.12 PM.jpeg
