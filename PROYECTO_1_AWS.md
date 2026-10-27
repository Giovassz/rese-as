# ✅ Proyecto 1: Notificación de edición de archivos en sitio productivo (AWS)

> **Estado:** COMPLETADO, IMPLEMENTADO Y DESPLEGADO EN VIVO  
> **Sitio Web Público:** [http://log-principal-equipo-4.s3-website-us-east-1.amazonaws.com/](http://log-principal-equipo-4.s3-website-us-east-1.amazonaws.com/)  
> **API Lambda Function URL:** `https://vxi7zw3gxy626pfdchmfvzx6ui0vcepq.lambda-url.us-east-1.on.aws/`  
> **Tabla DynamoDB:** `CoffeeTalk_Reviews`  
> **Bucket Principal:** `log-principal-equipo-4` (`us-east-1`)  
> **Bucket Respaldo:** `log-backup-equipo-4` (`us-west-2`)  
> **Costo:** 100% dentro de la Capa Gratuita (Free Tier) de AWS.

---

## 📊 Análisis de Costos (Free Tier)

* **AWS S3:** 5 GB de almacenamiento Standard, 20,000 peticiones GET y 2,000 peticiones PUT/POST en la capa de 12 meses.
* **AWS SNS:** 1,000,000 de publicaciones y 1,000 correos electrónicos salientes al mes sin costo.
* **AWS Lambda:** 1,000,000 de invocaciones gratuitas al mes de por vida.
* **Amazon DynamoDB:** 25 GB de almacenamiento y 25 RCU/WCU Always Free de por vida.

---

## 🏗️ Arquitectura de la Solución

Para cumplir todos los requerimientos de la prueba de concepto y la extensión en la nube:

1. **Sitio Web / Blog Público:** Bucket S3 principal en la Región A (`us-east-1`: `log-principal-equipo-4`) configurado con *Static Website Hosting*.
2. **Resistencia y Recuperación:** Habilitar **S3 Versioning** en el bucket principal. Si un archivo se modifica o elimina, queda la versión previa o un *Delete Marker* recuperable.
3. **Respaldo Multirregión:** Configurar **Cross-Region Replication (CRR)** hacia un segundo bucket en la Región B (`us-west-2`: `log-backup-equipo-4`).
4. **Notificación por Correo al Eliminar:** Configurar **S3 Event Notification** (`s3:ObjectRemoved:*`) filtrado para la carpeta de imágenes (`images/`) que dispare un tema de **AWS SNS** (`NotificacionEliminacionImagenes`) para enviar el correo automático.
5. **Persistencia Centralizada de Reseñas:** Función **AWS Lambda** (`CoffeeTalk_Reviews_API`) con **Function URL** pública y CORS que almacena y consulta reseñas en **Amazon DynamoDB** (`CoffeeTalk_Reviews`), reflejándolas en tiempo real para todos los usuarios.

---

## 📋 Configuración de Recursos en AWS

### 1. Buckets en S3 y Replicación Multirregión

1. **Bucket de Respaldo (Región Destino):**
   * **Nombre:** `log-backup-equipo-4`
   * **Región:** `us-west-2` (EE.UU. Oeste - Oregón).
   * **Bucket Versioning:** Habilitado.

2. **Bucket Principal (Región Origen):**
   * **Nombre:** `log-principal-equipo-4`
   * **Región:** `us-east-1` (EE.UU. Este - N. Virginia).
   * **Bucket Versioning:** Habilitado.
   * **Static Website Hosting:** Habilitado con `index.html`.

3. **Replicación Cross-Region (CRR):**
   * Replicación configurada desde `log-principal-equipo-4` hacia `log-backup-equipo-4`.

---

### Paso 2: Publicar el Sitio Web Público (Blog)

1. En el bucket principal, ve a la pestaña **Properties** > **Static website hosting** > Editar y selecciona **Enable**.
   * **Documento de índice:** `index.html`.

2. En la pestaña **Permissions** > **Bucket Policy**, añade la política que otorgue acceso de lectura pública a todos los objetos:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::blog-principal-equipo-us-east-1/*"
    }
  ]
}
```

3. Sube los archivos HTML/CSS de la página y coloca las imágenes dentro de una carpeta llamada `images/` (ej. `images/articulo1.png`).

---

### Paso 3: Configurar AWS SNS para el Envío del Correo

1. Ve al servicio **Amazon SNS** en la consola de AWS.
2. Crea un **Topic** de tipo **Standard** llamado `NotificacionEliminacionImagenes`.
3. Ve a **Subscriptions** > **Create subscription**:
   * **Protocolo:** Email.
   * **Endpoint:** Ingresa el correo electrónico del equipo de desarrollo.
4. Revisa la bandeja de entrada de tu correo y haz clic en **Confirm Subscription** en el correo enviado por AWS.
5. Edita la **Access Policy** del tema SNS para permitir que S3 (o Lambda) publique mensajes en él.

---

### Paso 4: Configurar Event Notifications en S3

1. Ve al bucket principal `blog-principal-equipo-us-east-1` > pestaña **Properties** > **Event notifications** > **Create event notification**.
2. **Configuración del Evento:**
   * **Event Name:** `NotificarEliminacionImagen`.
   * **Prefix:** `images/` (para que solo aplique cuando se eliminen imágenes de esa ruta).
   * **Event Types:** Selecciona `s3:ObjectRemoved:*` (cubre `ObjectRemoved:Delete` y `ObjectRemoved:DeleteMarkerCreated`).
   * **Destination:** Selecciona **SNS Topic** y elige `NotificacionEliminacionImagenes` (o **Lambda Function** si deseas personalizar el texto del correo).

---

## 🎯 Cómo Demostrar la Solución en la Presentación de Clase

Para impresionar en la revisión técnica:

1. **Mostrar el Blog en Vivo:** Abre la URL pública del *Static Website Hosting* de S3.
2. **Demostrar la Replicación Multirregión (CRR):** Muestra cómo el archivo subido en `us-east-1` aparece automáticamente en el bucket de `us-west-2`.
3. **Demostrar la Recuperación por Versionado:** Elimina un archivo o imagen en la consola. Muestra que en S3 se crea un *Delete Marker* y luego activa la opción **Show versions** para restaurar el archivo eliminando dicho *Delete Marker*.
4. **Demostrar la Notificación Automática:** Borra una imagen en la carpeta `images/` en vivo y enseña el correo de alerta recibido al instante en la bandeja de entrada.

---

## 🚀 Extensión: Persistencia y Sincronización en la Nube de Reseñas (100% Costo $0)

### ¿Por qué se necesitaba extender?
Originalmente, las reseñas se guardaban únicamente en el `localStorage` del navegador local de quien escribía la reseña. Si el profesor o cualquier otro usuario abría el sitio desde otra computadora o dispositivo, no veía las reseñas publicadas por los demás.

### Arquitectura Serverless de Costo $0 (Always Free)
Para que las reseñas se guarden centralmente y se reflejen en tiempo real en todos los navegadores sin pagar nada:

* **Amazon DynamoDB (Always Free de por vida):** 25 GB de almacenamiento y 25 unidades de capacidad de lectura/escritura (WCU/RCU). Permite millones de lecturas y escrituras al mes totalmente gratis de por vida.
* **AWS Lambda (Always Free de por vida):** 1,000,000 de ejecuciones al mes y 3.2 millones de segundos de cómputo gratuitos.
* **AWS Lambda Function URL (Always Free):** Genera un endpoint HTTPS público directo con soporte CORS integrado nativamente, eliminando la necesidad de pagar o configurar Amazon API Gateway.

---

### Paso a Paso para Activar la Persistencia en AWS

#### 1. Crear la Tabla en DynamoDB
1. En la consola de AWS, ve a **Amazon DynamoDB** > **Tables** > **Create table**.
2. **Table name:** `CoffeeTalk_Reviews`
3. **Partition key:** `id` (Tipo: `String`).
4. **Table settings:** Deja seleccionada la opción por defecto (*Default settings*) o *Provisioned* con 5 RCU y 5 WCU (ambas 100% dentro de la capa gratuita).
5. Haz clic en **Create table**.

#### 2. Crear la Función AWS Lambda
1. En la consola de AWS, ve a **AWS Lambda** > **Create function**.
2. **Function name:** `CoffeeTalk_Reviews_API`
3. **Runtime:** `Node.js 20.x` (o `Node.js 18.x`).
4. Haz clic en **Create function**.
5. En el editor de código (*Code source*), reemplaza el contenido de `index.mjs` por el siguiente código:

```javascript
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const TABLE_NAME = "CoffeeTalk_Reviews";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  "Content-Type": "application/json"
};

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;

  // Pre-flight CORS OPTIONS
  if (method === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders, body: "" };
  }

  try {
    // GET: Obtener todas las reseñas
    if (method === "GET") {
      const command = new ScanCommand({ TableName: TABLE_NAME });
      const response = await docClient.send(command);
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(response.Items || [])
      };
    }

    // POST: Guardar una nueva reseña
    if (method === "POST") {
      const data = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
      const item = {
        id: data.id || `rev-${Date.now()}`,
        cafeName: data.cafeName || "Cafetería Local",
        location: data.location || "Ciudad de México",
        category: data.category || "Especialidad",
        rating: Number(data.rating) || 5,
        title: data.title || "Excelente experiencia cafetera",
        content: data.content || "",
        author: data.author || "Aficionado al Café",
        authorHandle: data.authorHandle || "@coffeelover",
        authorAvatar: data.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        date: data.date || "Recién publicado",
        imageUrl: data.imageUrl || "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        amenities: Array.isArray(data.amenities) ? data.amenities : ["Café de Especialidad"],
        createdAt: Date.now()
      };

      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: item
      });
      await docClient.send(command);

      return {
        statusCode: 201,
        headers: corsHeaders,
        body: JSON.stringify({ message: "Reseña guardada exitosamente en DynamoDB", item })
      };
    }

    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  } catch (error) {
    console.error("Error en Lambda:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

6. Haz clic en **Deploy** en la consola de Lambda.

#### 3. Asignar Permisos de DynamoDB al Rol de la Lambda
1. En la pestaña de la Lambda, ve a **Configuration** > **Permissions**.
2. Haz clic sobre el nombre del rol (*Role name*). Se abrirá la consola de **IAM**.
3. En la sección *Permissions policies*, haz clic en **Add permissions** > **Attach policies**.
4. Busca y selecciona `AmazonDynamoDBFullAccess` (o crea una política inline para la tabla `CoffeeTalk_Reviews`).
5. Haz clic en **Add permissions**.

#### 4. Activar la Function URL (con CORS)
1. De vuelta en tu Lambda, ve a **Configuration** > **Function URL** > **Create function URL**.
2. **Auth type:** `NONE` (acceso público para el frontend web).
3. Marca la casilla **Configure cross-origin resource sharing (CORS)**:
   * **Allow origin:** `*`
   * **Allow methods:** `GET`, `POST`, `OPTIONS`
   * **Allow headers:** `content-type`
4. Haz clic en **Save**.
5. Copia la URL generada (ej. `https://abcdef123456.lambda-url.us-east-1.on.aws/`).

#### 5. Conectar con el Frontend (CoffeeTalk)
1. Abre [app.js](file:///c:/Users/giova/Downloads/Reseñas/app.js) y en la constante `AWS_CONFIG.apiUrl` (línea 235) pega la Function URL copiada:
   ```javascript
   const AWS_CONFIG = {
     apiUrl: "https://abcdef123456.lambda-url.us-east-1.on.aws/"
   };
   ```
2. Sube el archivo `app.js` actualizado a tu bucket principal de S3 (`blog-principal-equipo-us-east-1`).
3. ¡Listo! A partir de ese momento, cualquier reseña que se publique desde cualquier navegador o dispositivo se guardará en DynamoDB y se reflejará al instante en el feed de todos los visitantes.

---

### Demostración para la Revisión
1. **Abrir en dos dispositivos distintos:** Abre la web en la laptop y en un teléfono móvil (o ventana de incógnito).
2. **Publicar reseña en el móvil:** Llena el formulario en `crear-resena.html` con una calificación y descripción.
3. **Reflejar en tiempo real:** Recarga o visualiza la laptop: la reseña recién creada aparece inmediatamente al inicio del feed.
4. **Verificar en AWS:** Muestra en la consola de DynamoDB el nuevo registro guardado en la tabla `CoffeeTalk_Reviews`.
