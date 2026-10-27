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
├── PROYECTO_1_AWS.md   # Guía de implementación del Proyecto 1 en AWS (Completado)
├── index.html          # Feed principal, filtros dinámicos y widgets de trivia
├── cafeterias.html     # Directorio con filtros por zona, horario y categoría
├── crear-resena.html   # Formulario de publicación con autofill desde directorio
├── perfil.html         # Perfil del usuario, estadísticas, favoritos y logros
├── styles.css          # Sistema de diseño, tokens CSS, componentes y animaciones
├── app.js              # Lógica de datos, StorageService, navegación y eventos
└── logo.jpg            # Emblema oficial generado para CoffeeTalk
```

---

## ☁️ Proyecto 1: Notificación de Edición de Archivos en Sitio Productivo (AWS)

> **Estado:** ✅ **Completado / Implementado**  
> Documentación técnica completa disponible en: [PROYECTO_1_AWS.md](file:///c:/Users/giova/Downloads/Reseñas/PROYECTO_1_AWS.md)

- **Costo:** 100% dentro de la **Capa Gratuita (Free Tier)** de AWS (S3 5GB, SNS 1M pubs/1k emails, Lambda 1M invocaciones).
- **Componentes clave:**
  - **S3 Static Website Hosting** en `us-east-1` (`blog-principal-equipo-us-east-1`).
  - **S3 Versioning** para protección contra eliminación o edición accidental.
  - **Cross-Region Replication (CRR)** hacia `us-west-2` (`blog-backup-equipo-us-west-2`).
  - **S3 Event Notifications** (`s3:ObjectRemoved:*` en prefijo `images/`) vinculado a **Amazon SNS** (`NotificacionEliminacionImagenes`) para alerta inmediata por correo.

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
