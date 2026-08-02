import express from "express";
import { protect } from "../middleware/authMiddleware.js";

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
  getMyActors,
} from "../controllers/actorController.js";

router.get("/", getActors);

router.get("/mine", protect, getMyActors);

router.post("/", actorRules, handleActorValidation, addActor);

router.delete("/:id", deleteActor);

router.get("/:id/movies", getActorMovies);

router.get("/:id/costars", getCostars);

export default router;
