const express = require('express');
const app = express();
const port = 3000;

// --------------------
// 1. /header
// Recoger e imprimir por consola un parámetro llamado token
// --------------------
app.get('/header', (req, res) => {
    const token = req.headers.token; // o req.get('token')

    if (!token) {
        return res.status(401).json({
            code: 401,
            error: "Unauthorized",
            message: "Error: Set a token to login"
        });
    }

    console.log("Token recibido:", token);
    res.status(200).send("Token recibido correctamente");
});

// --------------------
// 2. /params
// Crear un parámetro llamado name en la ruta y devolver Hola ${name}
// --------------------
app.get('/params/:name', (req, res) => {
    const { name } = req.params;
    res.status(200).send(`Hola ${name}`);
});

// --------------------
// Escuchar puerto
// --------------------
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// 3. /query sumar desde 1 hasta n
app.get('/query', (req, res) => {
    const n = parseInt(req.query.n) || 100; // por defecto 100 si no se envía
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    res.status(200).send(`La suma de los números del 1 al ${n} es ${suma}`);
});

