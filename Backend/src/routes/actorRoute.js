const express = require("express");

const router = express.Router();

const {
  getActors,
  addActor,
  deleteActor,
  getActorMovies,
} = require("../controllers/actorController");

router.get("/", getActors);

router.post("/", addActor);

router.delete("/:id", deleteActor);

router.get("/:id/movies", getActorMovies);

module.exports = router;
