# CoffeeTalk — Guía Editorial y Bitácora de Cata (Equipo 5)

Sitio web estático desarrollado por el **Equipo 5** como guía editorial de cafeterías reales de especialidad en México, desplegado en **Amazon S3 Static Website Hosting** (`s3://equipo5-tarea1-cafe`, región `us-east-1`).

---

## Resumen del Proyecto

- **Métricas reales documentadas:** `6 cafeterías visitadas · 8 reseñas · 4 ciudades`
- **Arquitectura 100 % estática:** HTML5 semántico + CSS3 (`styles.css`) + fotografías locales en `images/` (sin dependencias de JavaScript ni imágenes externas).
- **Autores (Equipo 5):**
  - **Giovanni Lizama** · Equipo CoffeeTalk
  - **Mauricio** · Equipo CoffeeTalk

---

## Cafeterías Documentadas

| Archivo | Cafetería Real | Dirección y Ciudad | Horario |
| :--- | :--- | :--- | :--- |
| `cafe-alquimia.html` | **Quentin Café** | Av. Álvaro Obregón 64, Roma Norte, Cuauhtémoc, 06700 Ciudad de México, CDMX | Lun–Vie 7:30–21:00 · Sáb–Dom 8:00–21:00 |
| `cafe-cowork-studio.html` | **El Terrible Juan Café** | Calle Colonias 440, Col. Americana, 44160 Guadalajara, Jal. | Lun–Sáb 8:00–21:30 · Dom 8:30–20:00 |
| `cafe-borola.html` | **Café Avellaneda** | Calle Higuera 40-A, La Concepción, Coyoacán, 04020 Ciudad de México, CDMX | Lun–Dom 8:00–21:00 |
| `cafe-velvet.html` | **Kali Coffee Roasters** | Av. José Vasconcelos 150, Del Valle, 66220 San Pedro Garza García, N.L. | Lun–Vie 7:00–21:00 · Sáb–Dom 8:00–21:00 |
| `cafe-miga-grano.html` | **Chiquitito Café** | Calle Alfonso Reyes 232, Hipódromo Condesa, Cuauhtémoc, 06100 Ciudad de México, CDMX | Lun–Vie 7:30–20:30 · Sáb–Dom 8:00–20:30 |
| `cafe-niebla-alta.html` | **Café Bola de Oro (Casa Museo)** | Calle 5 de Mayo 10, Centro, 91500 Coatepec, Ver. | Lun–Dom 7:30–21:30 |

---

## Estructura de Archivos

```text
Reseñas/
├── index.html                  # Portada de la guía editorial y bitácora del Equipo 5
├── cafeterias.html             # Directorio de las 6 cafeterías visitadas con dirección y horario
├── resenas.html                # Nuestras Reseñas / Bitácora de Cata (8 reseñas firmadas por el equipo)
├── nosotros.html               # Presentación académica del Equipo 5 y objetivos del proyecto en S3
├── cafe-alquimia.html          # Ficha y cata: Quentin Café (Roma Norte, CDMX)
├── cafe-cowork-studio.html     # Ficha y cata: El Terrible Juan Café (Col. Americana, Guadalajara)
├── cafe-borola.html            # Ficha y cata: Café Avellaneda (Coyoacán, CDMX)
├── cafe-velvet.html            # Ficha y cata: Kali Coffee Roasters (San Pedro, Monterrey)
├── cafe-miga-grano.html        # Ficha y cata: Chiquitito Café (Condesa, CDMX)
├── cafe-niebla-alta.html       # Ficha y cata: Café Bola de Oro (Centro, Coatepec)
├── styles.css                  # Hoja de estilos unificada
├── deploy-aws.ps1              # Script de sincronización con Amazon S3
└── images/                     # Fotografías locales servidas directamente desde el bucket S3
```

---

## Despliegue en Amazon S3

Para sincronizar los archivos con el bucket `equipo5-tarea1-cafe` en `us-east-1`:

```powershell
aws s3 sync . s3://equipo5-tarea1-cafe --delete --exclude ".git/*"
```
