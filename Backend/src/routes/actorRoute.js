const express = require("express");

const router = express.Router();
const {
  actorRules,
  handleActorValidation,
} = require("../validators/actorValidator");

const {
  getActors,
  addActor,
  deleteActor,
  getActorMovies,
  getCostars,
} = require("../controllers/actorController");

router.get("/", getActors);

router.post("/", actorRules, handleActorValidation, addActor);

router.delete("/:id", deleteActor);

router.get("/:id/movies", getActorMovies);

router.get("/:id/costars", getCostars);

module.exports = router;
