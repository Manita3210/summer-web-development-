import movie from "../../data/movie.js";

export async function getAll() {
  return movie.find().populate("cast", "name photo");
}

export async function add(movieData) {
  return await movie.create(movieData);
}

export async function deleteMovie(id) {
  return await movie.findByIdAndDelete(id);
}
