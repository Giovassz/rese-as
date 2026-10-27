# CoffeeTalk (Ruta del Café) ☕ — Plataforma de Reseñas 100% Anónimas

Plataforma web de reseñas técnicas, sensoriales y directorio de cafeterías de especialidad, barras de espresso y espacios de coworking locales. Funciona con un modelo **100% anónimo**, permitiendo a los usuarios compartir opiniones libres, auténticas y desinteresadas sin registrarse ni exponer datos personales.

Diseñado con una estética artesanal inspirada en la cultura de cafeterías de especialidad y arquitectura limpia.

---

## 🚀 Características Principales

- **100% Estático y Serveless:** Construido con HTML5 semántico, CSS3 moderno (Variables CSS, Flexbox, CSS Grid) y JavaScript Vanilla. Desplegado en **Amazon S3** con backend serverless en **AWS Lambda** y **Amazon DynamoDB**.
- **Reseñas 100% Anónimas:**
  - Sin registro de cuentas, sin contraseñas ni perfiles personales expuestos.
  - Al publicar, el usuario puede firmar con un alias libre (por defecto *Catador Anónimo*) o inventar un seudónimo.
  - Avatar SVG abstracto y minimalista para todos los colaboradores.
- **Repositorio de Imágenes Públicas (`images/`):**
  - Todas las fotografías de artículos y portadas están alojadas directamente en el prefijo público `images/` del bucket S3 (`images/cafe-v60.jpg`, `images/latte-art.jpg`, `images/cold-brew.jpg`, `images/default.jpg`).
  - Conexión real con el sistema de alertas de Amazon SNS ante borrado de recursos del sitio web.
  - Imagen dedicada de prueba de eliminación (`images/prueba-borrado.jpg`) para demostraciones del examen sin afectar la visual del sitio.
- **Iconografía Vectorial Pura:** Sin emojis en la interfaz; todos los iconos son elementos vectoriales SVG limpios y consistentes.
- **Feed Interactivo de Reseñas:**
  - Filtrado en tiempo real por categorías: *Más Valoradas (5★)*, *Para Trabajar / WiFi*, *Pet Friendly*, *Espresso Bars*, *Métodos de Extracción*.
  - Búsqueda instantánea por cafetería, zona o método.
  - Modales detallados de lectura de reseñas completas.
- **Directorio Oficial de Cafeterías:**
  - Tarjetas con estado en vivo (Abierto / Cerrado), rango de precios, amenidades verificadas y menú destacado.
  - Botón directo **«Dar Reseña»** con **autorelleno automático** (nombre, zona y categoría) hacia el formulario de reseña anónima.
- **Formulario de Publicación de Reseñas Anónimas:**
  - Selector de calificación interactivo (1.0 a 5.0 estrellas).
  - Selección de métodos y amenidades.
  - Persistencia híbrida inmediata: guardado local en el navegador y sincronización en la nube con **Amazon DynamoDB** vía **AWS Lambda Function URL**.

---

## 📁 Estructura del Proyecto

```text
├── images/             # Repositorio de imágenes públicas versionadas y replicadas
│   ├── cafe-v60.jpg
│   ├── cold-brew.jpg
│   ├── latte-art.jpg
│   ├── default.jpg
│   └── prueba-borrado.jpg  # Archivo reservado para demo de eliminación en vivo
├── index.html          # Feed principal de reseñas anónimas y hero con imagen local
├── cafeterias.html     # Directorio técnico con filtros por zona, horario y categoría
├── crear-resena.html   # Formulario anónimo con alias libre y subida a la nube
├── styles.css          # Tokens de diseño, sistema responsivo y modales (v2.1)
├── app.js              # Lógica cliente, persistencia híbrida y AWS API (v2.1)
├── logo.jpg            # Emblema oficial CoffeeTalk
├── PROYECTO_1_AWS.md   # Arquitectura técnica en AWS y guía para el examen
└── README.md           # Resumen general del proyecto
```

---

## ☁️ Arquitectura e Infraestructura en AWS

- **URL del Sitio Web en Vivo:**  
  [http://log-principal-equipo-4.s3-website-us-east-1.amazonaws.com/](http://log-principal-equipo-4.s3-website-us-east-1.amazonaws.com/)

- **Backend Lambda Function URL:**  
  `https://vxi7zw3gxy626pfdchmfvzx6ui0vcepq.lambda-url.us-east-1.on.aws/`

- **Base de Datos NoSQL:**  
  Amazon DynamoDB — Tabla `CoffeeTalk_Reviews` (Primary Key: `id`).

- **Almacenamiento y Replicación:**
  - **Bucket Primario (`us-east-1`):** `log-principal-equipo-4` (Hosting estático, Versioning activo, Política pública).
  - **Bucket Secundario de Respaldo (`us-west-2` - Oregón):** `log-backup-equipo-4` (Replicación automática Cross-Region Replication - CRR con rol IAM).
  - **Alertas Amazon SNS:** Event Notification `s3:ObjectRemoved:*` sobre el prefijo `images/` que envía un correo inmediato al equipo en caso de eliminación de archivos.

---

## 💻 Ejecución Local

Para probar localmente:

```bash
# Con Node.js
npx serve .

# O con Python
python -m http.server 8080
```

---

© 2026 CoffeeTalk (Ruta del Café) — Equipo 4.
