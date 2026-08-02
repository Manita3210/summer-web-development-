import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

import {
  getMovies,
  addMovie,
  deleteMovie,
  getMyMovies,
} from "../controllers/movieController.js";

router.get("/", getMovies);

router.get("/mine", protect, getMyMovies);

router.post("/", protect, addMovie);

router.delete("/:id", protect, deleteMovie);

export default router;
