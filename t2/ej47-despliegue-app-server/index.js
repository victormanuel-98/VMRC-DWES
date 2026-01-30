const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: '¡Bienvenido a mi aplicación Node.js!',
    descripcion: 'Esta aplicación está desplegada en Vercel',
    fecha: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })
  });
});

// Ruta de información
app.get('/api/info', (req, res) => {
  res.json({
    nombre: 'Aplicación de ejemplo',
    version: '1.0.0',
    tecnologias: ['Node.js', 'Express', 'Vercel'],
    autor: 'VMRC-DWES'
  });
});

// Ruta de saludo personalizado
app.get('/api/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({
    mensaje: `¡Hola ${nombre}!`,
    timestamp: new Date().toISOString()
  });
});

// Ruta para operaciones matemáticas
app.get('/api/calcular', (req, res) => {
  const { num1, num2, operacion } = req.query;
  
  if (!num1 || !num2 || !operacion) {
    return res.status(400).json({
      error: 'Faltan parámetros',
      ejemplo: '/api/calcular?num1=10&num2=5&operacion=suma'
    });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = n1 + n2;
      break;
    case 'resta':
      resultado = n1 - n2;
      break;
    case 'multiplicacion':
      resultado = n1 * n2;
      break;
    case 'division':
      resultado = n2 !== 0 ? n1 / n2 : 'Error: División por cero';
      break;
    default:
      return res.status(400).json({
        error: 'Operación no válida',
        operaciones: ['suma', 'resta', 'multiplicacion', 'division']
      });
  }

  res.json({
    operacion,
    num1: n1,
    num2: n2,
    resultado
  });
});

// Ruta para datos de usuario (POST)
app.post('/api/usuario', (req, res) => {
  const { nombre, email, edad } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({
      error: 'El nombre y email son obligatorios'
    });
  }

  res.json({
    mensaje: 'Usuario recibido correctamente',
    datos: {
      nombre,
      email,
      edad: edad || 'No especificada',
      registrado: new Date().toISOString()
    }
  });
});

// Ruta 404 para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    rutas_disponibles: [
      '/',
      '/api/info',
      '/api/saludo/:nombre',
      '/api/calcular?num1=X&num2=Y&operacion=Z',
      'POST /api/usuario'
    ]
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});

// Exportar para Vercel
module.exports = app;
