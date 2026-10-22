# CoffeeTalk (Ruta del Café) ☕

Plataforma web de reseñas técnicas, sensoriales y directorio de cafeterías de especialidad, barras de espresso y espacios de coworking locales.

Diseñado con una estética artesanal cálida inspirada en la cultura del café (Caribou Coffee y arquitectura limpia por bloques de Baristas).

---

## 🚀 Características Principales

- **100% Estático:** Construido exclusivamente con HTML5 semántico, CSS3 moderno (Variables CSS, Flexbox, CSS Grid) y JavaScript Vanilla. Optimizado para despliegue en **Amazon S3**, **CloudFront** o **GitHub Pages**.
- **Iconografía Vectorial Pura:** Sin emojis en la interfaz; todos los iconos son elementos vectoriales SVG limpios y consistentes.
- **Feed Interactivo de Reseñas:**
  - Filtrado en tiempo real por categorías: *Más Valoradas (5★)*, *Para Trabajar / WiFi*, *Pet Friendly*, *Espresso Bars*, *Métodos de Extracción*.
  - Búsqueda instantánea por nombre de cafetería, zona, barista o palabra clave.
  - Modales detallados de lectura de reseñas completas.
- **Directorio Oficial de Cafeterías:**
  - Tarjetas de establecimientos con estado de apertura en vivo (Abierto / Cerrado), rango de precios, amenidades verificadas y menú destacado.
  - Botón directo de **«Dar Reseña»** en cada tarjeta y en el modal de detalles con **autorelleno automático** (nombre, zona y categoría) hacia el formulario de reseña.
- **Formulario de Publicación de Reseñas:**
  - Selector de calificación con estrellas interactivas (1.0 a 5.0).
  - Selección de métodos de extracción y servicios (WiFi, enchufes, leches vegetales, pet friendly, etc.).
  - Persistencia de datos en `localStorage` con notificaciones tipo Toast.
- **Perfil Cafetero de Usuario:**
  - Estadísticas de reseñas publicadas, cafeterías favoritas y calificación promedio.
  - Pestañas dinámicas para navegar entre reseñas propias y establecimientos guardados.
  - Sistema de insignias y logros de cata desbloqueables.
- **Diseño Ultra Responsivo:** Adaptado meticulosamente para dispositivos móviles, tablets, laptops y pantallas de escritorio.

---

## 📁 Estructura del Proyecto

```text
├── index.html          # Feed principal, filtros dinámicos y widgets de trivia
├── cafeterias.html     # Directorio con filtros por zona, horario y categoría
├── crear-resena.html   # Formulario de publicación con autofill desde directorio
├── perfil.html         # Perfil del usuario, estadísticas, favoritos y logros
├── styles.css          # Sistema de diseño, tokens CSS, componentes y animaciones
├── app.js              # Lógica de datos, StorageService, navegación y eventos
└── logo.jpg            # Emblema oficial generado para CoffeeTalk
```

---

## 💻 Despliegue Local

Simplemente abre `index.html` en cualquier navegador web o ejecuta un servidor HTTP estático local:

```bash
# Con Node.js
npx serve .

# O con Python
python -m http.server 8080
```

---

© 2026 CoffeeTalk (Ruta del Café).
