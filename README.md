# CoffeeTalk (Ruta del Café) — Sitio Institucional 100% Estático

Demostración institucional de un directorio de cafeterías de especialidad y una galería de reseñas anónimas. El sitio está construido únicamente con **HTML5 semántico y CSS3**: no utiliza JavaScript, formularios, almacenamiento local ni servicios externos.

Diseñado con una estética artesanal / retro contemporánea inspirada en la cultura de cafeterías de especialidad.

---

## Características

- **100% estático:** solo archivos HTML y CSS. Navegación entre páginas con enlaces `<a>` tradicionales.
- **Sin JavaScript:** el menú móvil usa un `<input type="checkbox">` + `<label>`, y la trivia del día usa `<details>/<summary>` nativo.
- **Sin estado ni interacción dinámica:** no hay `localStorage`, APIs, modales, filtros en tiempo real, favoritos ni perfiles de usuario.
- **Reseñas anónimas:** cada comentario se firma con un identificador anónimo (ej. *Catador Anónimo #104*, *Barista Anónimo*, *Entusiasta de Filtrados*), conserva la foto de la visita, puntuación en estrellas SVG, fecha fija y etiquetas de categoría.
- **Iconografía vectorial pura:** todos los iconos son SVG inline, sin emojis.
- **Sistema de diseño conservado** (`styles.css`): Espresso Profundo `#2C1810`, Terracota `#C86D51`, Azul Lavado Vintage `#5B8C9A`, Crema Suave `#FDF8F5`, Oro Tostado `#E6A100`; tipografías Playfair Display e Inter.

---

## Páginas

| Archivo | Descripción |
| --- | --- |
| `index.html` | Landing demostrativa: hero editorial con métricas fijas (+480 cafés, +3,200 reseñas, 4.9 estrellas), cafeterías destacadas con notas de cata y sidebar técnico (Trivia del día desplegable y Grano del Mes). |
| `nosotros.html` | Quiénes somos: Misión, Visión, Valores y manifiesto editorial "La Cultura del Buen Café". |
| `resenas.html` | Lista estética de reseñas y comentarios anónimos con foto, estrellas SVG, texto sensorial (aroma, cuerpo, acidez, espacio), fecha y etiquetas. |
| `cafeterias.html` | Directorio en resumen de 6 cafeterías: dirección, zona, especialidades, badge fijo de horario y botón "Ver más". |
| `cafe-*.html` | Ficha individual de cada cafetería: descripción, información, carta destacada, servicios, notas de cata y reseñas anónimas relacionadas. |

Fichas disponibles: `cafe-alquimia.html`, `cafe-cowork-studio.html`, `cafe-borola.html`, `cafe-velvet.html`, `cafe-miga-grano.html`, `cafe-niebla-alta.html`.

---

## Estructura del Proyecto

```text
├── images/                 # Fotografías locales de las reseñas
├── index.html              # Landing demostrativa
├── nosotros.html           # Misión, Visión y Valores
├── resenas.html            # Reseñas anónimas de la comunidad
├── cafeterias.html         # Directorio de cafeterías
├── cafe-alquimia.html      # Fichas individuales (x6)
├── cafe-cowork-studio.html
├── cafe-borola.html
├── cafe-velvet.html
├── cafe-miga-grano.html
├── cafe-niebla-alta.html
├── styles.css              # Sistema de diseño y estilos (v3.0)
├── logo.jpg                # Emblema oficial CoffeeTalk
├── deploy-aws.ps1          # Script heredado de despliegue en AWS
├── PROYECTO_1_AWS.md       # Documentación heredada de la arquitectura AWS
└── README.md
```

> Nota: `deploy-aws.ps1` y `PROYECTO_1_AWS.md` corresponden a la versión anterior del proyecto (con backend Lambda/DynamoDB y `app.js`). El sitio actual no depende de ellos; se pueden eliminar o conservar como referencia histórica.

---

## Ejecución Local

Al ser un sitio estático basta con abrir `index.html` en el navegador, o servir la carpeta:

```bash
# Con Node.js
npx serve .

# O con Python
python -m http.server 8080
```

---

## Despliegue

Cualquier hosting de archivos estáticos funciona (Amazon S3 con hosting web, GitHub Pages, Netlify, etc.). Sube todos los archivos `.html`, `styles.css`, `logo.jpg` y la carpeta `images/`.

---

© 2026 CoffeeTalk (Ruta del Café) — Equipo 4.
