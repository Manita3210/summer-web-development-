const movies = require("../../data/movies");

const getMovies = (req, res) => {
  res.json(movies);
};

const addMovie = (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    ...req.body,
  };

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully",
    movie: newMovie,
  });
};

const deleteMovie = (req, res) => {
  const id = Number(req.params.id);

  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  const deletedMovie = movies.splice(index, 1);

  res.json({
    message: "Movie deleted successfully",
    movie: deletedMovie[0],
  });
};

module.exports = {
  getMovies,
  addMovie,
  deleteMovie,
};
