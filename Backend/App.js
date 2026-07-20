import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnection from "./src/config/db.js";

import actorRoutes from "./src/routes/actorRoute.js";
import movieRoutes from "./src/routes/movieRoute.js";

dotenv.config();

dbConnection();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/actors", actorRoutes);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
