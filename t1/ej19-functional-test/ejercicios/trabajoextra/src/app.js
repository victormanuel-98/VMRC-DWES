import express from "express";
import notasRoutes from "./routes/notas.routes.js";

const app = express();

app.use(express.json());
app.use("/api/notas", notasRoutes);

export default app;
