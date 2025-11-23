const express = require("express");
const app = express();
const usersRouter = require("./src/routes/users.routes");

app.use(express.json()); // body parser

app.use("/users", usersRouter);

// Middleware de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
