const express = require("express");

const app = express();

const actorRoutes = require("./src/routes/actorRoute");
const movieRoutes = require("./src/routes/movieRoute");

const PORT = 3000;

app.use(express.json());

app.use("/api/actors", actorRoutes);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
