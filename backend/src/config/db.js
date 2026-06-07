import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const clientOptions = {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        };
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        console.log("MongoDB conectado con éxito");
    } catch (error) {
        console.error("Error crítico al conectar MongoDB:", error.message);
        process.exit(1);
    }
};