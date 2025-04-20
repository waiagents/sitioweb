# WAI Agents - Sitio Web

Este repositorio contiene el código completo para el sitio web de WAI Agents, una agencia de inteligencia artificial especializada en automatización.

## Características

- Diseño futurista con elementos robóticos y visualizaciones de datos
- Calendario de disponibilidad integrado con Google Calendar
- Espacios para videos de YouTube
- Asistente virtual con video explicativo
- Diseño responsive para todos los dispositivos
- Optimizado para rendimiento y SEO
- Service Worker para soporte offline

## Estructura de Archivos

```
wai-agents-html/
├── css/
│   ├── normalize.css       # Reset CSS para consistencia entre navegadores
│   ├── styles.css          # Estilos principales
│   ├── animations.css      # Animaciones y transiciones
│   ├── responsive.css      # Estilos para dispositivos móviles y tablets
│   └── sections.css        # Estilos específicos para cada sección
├── js/
│   ├── main.js             # Funcionalidad principal
│   ├── calendar.js         # Calendario de disponibilidad
│   ├── videos.js           # Manejo de videos de YouTube
│   ├── assistant.js        # Asistente virtual
│   ├── animations.js       # Animaciones básicas
│   ├── futuristic-effects.js # Efectos visuales futuristas
│   ├── google-calendar.js  # Integración con Google Calendar
│   ├── service-worker.js   # Service Worker para soporte offline
│   └── performance.js      # Optimizaciones de rendimiento
├── images/                 # Imágenes y recursos visuales
└── index.html              # Página principal
```

## Instrucciones de Implementación en GitHub Pages

### Requisitos Previos

- Una cuenta de GitHub
- Git instalado en tu computadora (opcional)

### Opción 1: Implementación Directa desde GitHub

1. **Crear un nuevo repositorio en GitHub**:
   - Ve a [GitHub](https://github.com) e inicia sesión
   - Haz clic en el botón "New" para crear un nuevo repositorio
   - Nombra el repositorio como `waiagents` o el nombre que prefieras
   - Asegúrate de que el repositorio sea público
   - Haz clic en "Create repository"

2. **Subir los archivos**:
   - En la página del repositorio, haz clic en "uploading an existing file"
   - Arrastra todos los archivos y carpetas de este proyecto o selecciónalos manualmente
   - Haz clic en "Commit changes"

3. **Configurar GitHub Pages**:
   - Ve a la pestaña "Settings" de tu repositorio
   - Desplázate hacia abajo hasta la sección "GitHub Pages"
   - En "Source", selecciona "main" como rama y "/" (root) como carpeta
   - Haz clic en "Save"
   - GitHub te proporcionará una URL donde tu sitio está publicado (generalmente https://[tu-usuario].github.io/[nombre-repositorio])

### Opción 2: Implementación Usando Git

1. **Crear un nuevo repositorio en GitHub** (igual que en la Opción 1)

2. **Clonar el repositorio localmente**:
   ```bash
   git clone https://github.com/[tu-usuario]/[nombre-repositorio].git
   cd [nombre-repositorio]
   ```

3. **Copiar los archivos del proyecto**:
   - Copia todos los archivos y carpetas de este proyecto al directorio del repositorio clonado

4. **Subir los cambios a GitHub**:
   ```bash
   git add .
   git commit -m "Implementación inicial del sitio web de WAI Agents"
   git push origin main
   ```

5. **Configurar GitHub Pages** (igual que en la Opción 1)

## Personalización

### Configuración de Google Calendar

Para integrar el calendario con Google Calendar, necesitas:

1. **Crear un proyecto en Google Cloud Platform**:
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un nuevo proyecto
   - Habilita la API de Google Calendar
   - Crea credenciales OAuth 2.0

2. **Actualizar las credenciales en el código**:
   - Abre el archivo `js/google-calendar.js`
   - Reemplaza `YOUR_API_KEY` con tu API Key
   - Reemplaza `YOUR_CLIENT_ID` con tu Client ID

### Videos de YouTube

Para agregar tus propios videos:

1. **Obtener los IDs de YouTube**:
   - Para un video con URL `https://www.youtube.com/watch?v=ABCDEFG`, el ID es `ABCDEFG`

2. **Actualizar los IDs en el código**:
   - Abre el archivo `index.html`
   - Busca los atributos `data-video-id` y reemplaza `VIDEO_ID_1`, `VIDEO_ID_2`, `VIDEO_ID_3` y `VIDEO_ID_EXPLAINER` con tus IDs de YouTube

### Personalización de Contenido

- **Textos**: Edita el archivo `index.html` para cambiar los textos según tus necesidades
- **Imágenes**: Reemplaza las imágenes en la carpeta `images/` manteniendo los mismos nombres de archivo
- **Estilos**: Modifica los archivos CSS en la carpeta `css/` para cambiar colores, fuentes, etc.

## Optimización y Rendimiento

Este sitio web incluye varias optimizaciones para mejorar el rendimiento:

- **Lazy Loading** de imágenes
- Carga diferida de scripts no críticos
- Service Worker para soporte offline
- Precarga de recursos críticos
- Optimización de fuentes

## Soporte y Contacto

Si tienes preguntas o necesitas ayuda con la implementación, puedes contactarnos en:

- Email: info@waiagents.com
- Teléfono: +1 (809) 555-1234

---

© 2025 WAI Agents. Todos los derechos reservados.
