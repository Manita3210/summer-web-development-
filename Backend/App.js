const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

const actorRoutes = require("./src/routes/actorRoute");
const movieRoutes = require("./src/routes/movieRoute");

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
