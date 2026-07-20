import express from "express";

const router = express.Router();
import {
  actorRules,
  handleActorValidation,
} from "../validators/actorValidator.js";

import {
  getActors,
  addActor,
  deleteActor,
  getActorMovies,
  getCostars,
} from "../controllers/actorController.js";

router.get("/", getActors);

router.post("/", actorRules, handleActorValidation, addActor);

router.delete("/:id", deleteActor);

router.get("/:id/movies", getActorMovies);

router.get("/:id/costars", getCostars);

export default router;
