import express from "express";

const app = express();
app.use(express.json());

// Middleware: comprueba si el usuario está autenticado
const vipMiddleware = (req, res, next) => {
    const user = req.headers["authorization"];

    if (!user) {
        return res.status(401).json({ message: "Acceso solo para usuarios registrados" });
    }

    next();
};

// Middleware: comprueba si el usuario es admin
const adminMiddleware = (req, res, next) => {
    const user = req.headers["authorization"];

    if (!user) {
        return res.status(401).json({ message: "Acceso solo para usuarios registrados" });
    }

    if (user !== "admin") {
        return res.status(403).json({ message: "Acceso exclusivo para administradores" });
    }

    next();
};

// Ruta pública
app.get("/public", (req, res) => {
    res.json({ message: "Bienvenido a la zona pública" });
});

// Ruta VIP (usuarios registrados)
app.get("/vip", vipMiddleware, (req, res) => {
    res.json({ message: "Acceso VIP concedido" });
});

// Ruta Admin (usuarios con rol admin)
app.get("/admin", adminMiddleware, (req, res) => {
    res.json({ message: "Bienvenido, administrador" });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});
