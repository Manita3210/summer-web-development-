import express from "express";

const router = express.Router();

import {
  getMovies,
  addMovie,
  deleteMovie,
} from "../controllers/movieController.js";

router.get("/", getMovies);

router.post("/", addMovie);

router.delete("/:id", deleteMovie);

export default router;
