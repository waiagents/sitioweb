/* Generador de imágenes para WAI Agents */
const fs = require('fs');
const { createCanvas } = require('canvas');

// Función para crear un logo simple de WAI Agents
function createLogo() {
  const canvas = createCanvas(200, 80);
  const ctx = canvas.getContext('2d');
  
  // Fondo transparente
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Gradiente para el texto
  const gradient = ctx.createLinearGradient(0, 0, 0, 80);
  gradient.addColorStop(0, '#7C52ED');
  gradient.addColorStop(1, '#48C2F0');
  
  // Texto "WAI"
  ctx.font = 'bold 50px Arial';
  ctx.fillStyle = gradient;
  ctx.fillText('WAI', 10, 55);
  
  // Texto "Agents"
  ctx.font = '30px Arial';
  ctx.fillText('Agents', 110, 55);
  
  // Guardar la imagen
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/home/ubuntu/wai-agents-html/images/wai-logo.png', buffer);
  
  // Versión blanca para el footer
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 50px Arial';
  ctx.fillText('WAI', 10, 55);
  ctx.font = '30px Arial';
  ctx.fillText('Agents', 110, 55);
  
  const whiteBuffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/home/ubuntu/wai-agents-html/images/wai-logo-white.png', whiteBuffer);
}

// Función para crear un favicon
function createFavicon() {
  const canvas = createCanvas(32, 32);
  const ctx = canvas.getContext('2d');
  
  // Fondo transparente
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Círculo de fondo
  ctx.beginPath();
  ctx.arc(16, 16, 16, 0, Math.PI * 2);
  ctx.fillStyle = '#7C52ED';
  ctx.fill();
  
  // Texto "W"
  ctx.font = 'bold 20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('W', 7, 23);
  
  // Guardar la imagen
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/home/ubuntu/wai-agents-html/images/favicon.png', buffer);
}

// Función para crear placeholders para videos
function createVideoPlaceholders() {
  const width = 600;
  const height = 338; // Proporción 16:9
  
  for (let i = 1; i <= 3; i++) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Fondo con gradiente
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#3D157E');
    gradient.addColorStop(1, '#06185F');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Texto
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(`Video Demostrativo ${i}`, width / 2, height / 2 - 20);
    
    // Subtexto
    ctx.font = '20px Arial';
    ctx.fillText('Haz clic para reproducir', width / 2, height / 2 + 20);
    
    // Icono de reproducción
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 + 70, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(width / 2 - 10, height / 2 + 60);
    ctx.lineTo(width / 2 + 15, height / 2 + 70);
    ctx.lineTo(width / 2 - 10, height / 2 + 80);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
    
    // Guardar la imagen
    const buffer = canvas.toBuffer('image/jpg');
    fs.writeFileSync(`/home/ubuntu/wai-agents-html/images/video-placeholder-${i}.jpg`, buffer);
  }
  
  // Placeholder para el video explicativo
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fondo con gradiente
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#7C52ED');
  gradient.addColorStop(1, '#48C2F0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Texto
  ctx.font = 'bold 30px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText('Video Explicativo', width / 2, height / 2 - 20);
  
  // Subtexto
  ctx.font = '20px Arial';
  ctx.fillText('Descubre cómo funciona WAI Agents', width / 2, height / 2 + 20);
  
  // Icono de reproducción
  ctx.beginPath();
  ctx.arc(width / 2, height / 2 + 70, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(width / 2 - 10, height / 2 + 60);
  ctx.lineTo(width / 2 + 15, height / 2 + 70);
  ctx.lineTo(width / 2 - 10, height / 2 + 80);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  // Guardar la imagen
  const buffer = canvas.toBuffer('image/jpg');
  fs.writeFileSync('/home/ubuntu/wai-agents-html/images/video-thumbnail.jpg', buffer);
}

// Función para crear imágenes para la sección "Sobre Nosotros"
function createAboutImage() {
  const canvas = createCanvas(600, 400);
  const ctx = canvas.getContext('2d');
  
  // Fondo con gradiente
  const gradient = ctx.createLinearGradient(0, 0, 600, 400);
  gradient.addColorStop(0, '#F2F5F9');
  gradient.addColorStop(1, '#E0E6F0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 600, 400);
  
  // Dibujar personas estilizadas
  for (let i = 0; i < 5; i++) {
    const x = 100 + i * 100;
    const y = 200;
    
    // Cabeza
    ctx.beginPath();
    ctx.arc(x, y - 50, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#7C52ED';
    ctx.fill();
    
    // Cuerpo
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x, y + 70);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#7C52ED';
    ctx.stroke();
    
    // Brazos
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 30, y + 30);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y + 30);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#7C52ED';
    ctx.stroke();
    
    // Piernas
    ctx.beginPath();
    ctx.moveTo(x, y + 70);
    ctx.lineTo(x - 20, y + 120);
    ctx.moveTo(x, y + 70);
    ctx.lineTo(x + 20, y + 120);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#7C52ED';
    ctx.stroke();
  }
  
  // Texto
  ctx.font = 'bold 40px Arial';
  ctx.fillStyle = '#1A6DB0';
  ctx.textAlign = 'center';
  ctx.fillText('Nuestro Equipo', 300, 50);
  
  // Guardar la imagen
  const buffer = canvas.toBuffer('image/jpg');
  fs.writeFileSync('/home/ubuntu/wai-agents-html/images/about-image.jpg', buffer);
}

// Función para crear imágenes para la sección de blog
function createBlogImages() {
  const width = 400;
  const height = 250;
  
  const topics = [
    'IA en Atención al Cliente',
    'Automatización de Procesos',
    'Caso de Éxito: Clínica'
  ];
  
  for (let i = 0; i < 3; i++) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Fondo con gradiente
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, i === 0 ? '#7C52ED' : (i === 1 ? '#48C2F0' : '#3D157E'));
    gradient.addColorStop(1, '#06185F');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Patrón de fondo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < width; x += 20) {
      for (let y = 0; y < height; y += 20) {
        ctx.fillRect(x, y, 2, 2);
      }
    }
    
    // Texto
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(topics[i], width / 2, height / 2);
    
    // Guardar la imagen
    const buffer = canvas.toBuffer('image/jpg');
    fs.writeFileSync(`/home/ubuntu/wai-agents-html/images/blog-${i+1}.jpg`, buffer);
  }
}

// Función para crear imágenes de testimonios
function createTestimonialImages() {
  const size = 100;
  
  for (let i = 1; i <= 3; i++) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Fondo circular
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${(i - 1) * 60 + 240}, 70%, 60%)`;
    ctx.fill();
    
    // Iniciales
    const initials = ['MR', 'CM', 'AG'][i - 1];
    ctx.font = 'bold 40px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initials, size / 2, size / 2);
    
    // Guardar la imagen
    const buffer = canvas.toBuffer('image/jpg');
    fs.writeFileSync(`/home/ubuntu/wai-agents-html/images/testimonial-${i}.jpg`, buffer);
  }
}

// Ejecutar todas las funciones
try {
  createLogo();
  createFavicon();
  createVideoPlaceholders();
  createAboutImage();
  createBlogImages();
  createTestimonialImages();
  console.log('Todas las imágenes han sido generadas correctamente.');
} catch (error) {
  console.error('Error al generar las imágenes:', error);
}
