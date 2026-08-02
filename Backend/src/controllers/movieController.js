import * as movieModel from "../models/movieModel.js";

export const getMovies = async (req, res) => {
  const movies = await movieModel.getAll();
  res.json(movies);
};

export const addMovie = async (req, res) => {
  const newMovie = await movieModel.add(req.body);
  res
    .status(201)
    .json({ message: "Movie added successfully", movie: newMovie });
};

export const getMyMovies = async (req, res) => {
  const movies = await movieModel.getMine(req.userId);
  res.json(movies);
};

export const deleteMovie = async (req, res) => {
  const deletedMovie = await movieModel.deleteMovie(req.params.id);
  if (!deletedMovie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.json({ message: "Movie deleted successfully", movie: deletedMovie });
};
