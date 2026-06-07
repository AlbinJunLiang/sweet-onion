import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    // 1. Esperamos obligatoriamente a la base de datos
    await connectDB();

    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo de forma segura en puerto ${PORT}`);
    });
};

startServer();