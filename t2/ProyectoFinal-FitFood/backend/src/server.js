import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
    console.log(`🚀 Servidor FitFood escuchando en puerto ${PORT}`);
    console.log(`📍 Entorno: ${process.env.NODE_ENV || 'development'}`);
});
