import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import dbConnection from "./src/config/db.js";

import actorRoutes from "./src/routes/actorRoute.js";
import movieRoutes from "./src/routes/movieRoute.js";
import dashboardRoutes from "./src/routes/dashboardRoute.js";
import authRoutes from "./src/routes/authRoute.js";

dotenv.config();
dbConnection();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/health", (req, res) => res.status(200).json({ ok: true }));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/actors", actorRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({ error: err.message || "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
