const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Servir archivos estáticos
app.use(express.static('public'));

// Evento de conexión
io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    // Recibir mensaje del cliente
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);

        // Enviar mensaje a TODOS los clientes
        io.emit('mensaje', data);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
