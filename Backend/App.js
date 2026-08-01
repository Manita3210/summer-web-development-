import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnection from "./src/config/db.js";

import actorRoutes from "./src/routes/actorRoute.js";
import movieRoutes from "./src/routes/movieRoute.js";

import dashboardRoutes from "./src/routes/dashboardRoute.js";

dotenv.config();

dbConnection();

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/health", (req, res) => res.status(200).json({ ok: true }));

app.use(express.json());
app.use(cors());

app.use("/api/actors", actorRoutes);
app.use("/api/movies", movieRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
