
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import notasRoutes from "./routes/notas.routes.js";
import filesRoutes from "./routes/files.routes.js";
import morgan from "morgan";
import logger from "./utils/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Serve static UI from ./public (moved into src/public)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

// Middlewares
app.use(express.json());
app.use(morgan("combined", {
    stream: {
        write: message => logger.info(message.trim())
    }
}));

// Rutas
app.use("/api/notas", notasRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/files", filesRoutes);

// Middleware global de errores
app.use(errorHandler);

export default app;
