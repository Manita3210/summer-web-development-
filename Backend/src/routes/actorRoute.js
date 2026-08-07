import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

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

router.post(
  "/",
  protect,
  upload.single("photo"),
  actorRules,
  handleActorValidation,
  addActor,
);

router.delete("/:id", protect, deleteActor);

router.get("/:id/movies", getActorMovies);

router.get("/:id/costars", getCostars);

export default router;
