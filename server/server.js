import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import topicRouter from "./routes/topic.routes.js";
import articleRouter from "./routes/article.routes.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

const PORT = process.env.PORT || 5000;

// database connection
await connectDB();

app.get("/api-test", (req, res) => {

    res.send("Server is running")
});

// api endpoints
app.use("/api/auth", authRouter);

app.use("/api/topics", topicRouter);

app.use("/api/articles", articleRouter);


app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started running at PORT : ${PORT}`));

