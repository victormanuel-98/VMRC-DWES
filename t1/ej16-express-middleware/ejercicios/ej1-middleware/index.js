const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const app = express();
const port = 3000;

// --------------------
// Configuración de Winston
// --------------------
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
            )
        })
    ],
    exitOnError: false
});

// --------------------
// Configuración de Morgan para Winston
// --------------------
logger.stream = {
    write: (message) => logger.info(message.trim())
};

// Formato de Morgan para mostrar método, URL y status
app.use(morgan(':method :url :status', {
    stream: {
        write: (message) => {
            const status = parseInt(message.split(' ')[2]); // obtiene el código de estado
            if (status >= 500) logger.error(message.trim());
            else if (status >= 400) logger.warn(message.trim());
            else logger.info(message.trim());
        }
    }
}));

// --------------------
// Rutas de ejemplo
// --------------------
app.get('/', (req, res) => res.send('Hola Mundo!'));
app.get('/error', (req, res) => res.status(500).send('Error de prueba'));
app.get('/notfound', (req, res) => res.status(404).send('No encontrado'));

// --------------------
// Escuchar puerto
// --------------------
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


// Middleware para validar acceso admin
function adminMiddleware(req, res, next) {
    const password = req.headers.password;

    if (password && password === 'patata') {
        // Acceso correcto, continuar con la ruta
        return next();
    }

    // Acceso incorrecto
    res.status(401).json({
        code: 401,
        error: "Unauthorized",
        message: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
    });
}

// Ruta protegida usando el middleware
app.get('/admin', adminMiddleware, (req, res) => {
    res.status(200).send("Bienvenid@, disfrute del contenido");
});
