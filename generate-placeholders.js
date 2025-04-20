/* Generador de imágenes alternativo para WAI Agents */
const fs = require('fs');
const path = require('path');

// Función para crear archivos de placeholder de texto
function createPlaceholderFiles() {
  const imagesDir = '/home/ubuntu/wai-agents-html/images';
  
  // Lista de archivos a crear
  const files = [
    { name: 'wai-logo.png', content: 'WAI AGENTS LOGO PLACEHOLDER' },
    { name: 'wai-logo-white.png', content: 'WAI AGENTS WHITE LOGO PLACEHOLDER' },
    { name: 'favicon.png', content: 'FAVICON PLACEHOLDER' },
    { name: 'video-placeholder-1.jpg', content: 'VIDEO PLACEHOLDER 1' },
    { name: 'video-placeholder-2.jpg', content: 'VIDEO PLACEHOLDER 2' },
    { name: 'video-placeholder-3.jpg', content: 'VIDEO PLACEHOLDER 3' },
    { name: 'video-thumbnail.jpg', content: 'VIDEO THUMBNAIL PLACEHOLDER' },
    { name: 'about-image.jpg', content: 'ABOUT IMAGE PLACEHOLDER' },
    { name: 'blog-1.jpg', content: 'BLOG IMAGE 1 PLACEHOLDER' },
    { name: 'blog-2.jpg', content: 'BLOG IMAGE 2 PLACEHOLDER' },
    { name: 'blog-3.jpg', content: 'BLOG IMAGE 3 PLACEHOLDER' },
    { name: 'testimonial-1.jpg', content: 'TESTIMONIAL 1 PLACEHOLDER' },
    { name: 'testimonial-2.jpg', content: 'TESTIMONIAL 2 PLACEHOLDER' },
    { name: 'testimonial-3.jpg', content: 'TESTIMONIAL 3 PLACEHOLDER' }
  ];
  
  // Crear cada archivo
  files.forEach(file => {
    const filePath = path.join(imagesDir, file.name);
    fs.writeFileSync(filePath, file.content);
    console.log(`Archivo creado: ${filePath}`);
  });
  
  console.log('Todos los archivos de placeholder han sido creados correctamente.');
}

// Ejecutar la función
try {
  createPlaceholderFiles();
} catch (error) {
  console.error('Error al crear los archivos de placeholder:', error);
}
