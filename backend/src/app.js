import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import completionRoutes from "./routes/completion.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import modelRoutes from "./routes/model.routes.js";

const app = express();

app.use(express.json());


app.use(cors({
    origin: true, 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"] // Asegúrate de incluir Authorization
}));

app.options('*', cors());

app.use("/api/users", userRoutes);
app.use("/api/completions", completionRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/models", modelRoutes);

if (process.env.NODE_ENV === "development") {
    const swaggerUi = await import("swagger-ui-express");
    const swaggerSpec = await import("./config/swagger.js");

    app.use(
        "/api/docs",
        swaggerUi.default.serve,
        swaggerUi.default.setup(swaggerSpec.default)
    );
}

export default app;