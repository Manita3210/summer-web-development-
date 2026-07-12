const actors = require("../../data/actors");
const movies = require("../../data/movies");

const getActors = (req, res) => {
  res.json(actors);
};

const addActor = (req, res) => {
  const newActor = {
    id: actors.length + 1,
    ...req.body,
  };

  actors.push(newActor);

  res.status(201).json({
    message: "Actor added successfully",
    actor: newActor,
  });
};

const deleteActor = (req, res) => {
  const id = Number(req.params.id);

  const index = actors.findIndex((actor) => actor.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Actor not found",
    });
  }

  const deletedActor = actors.splice(index, 1);

  res.json({
    message: "Actor deleted successfully",
    actor: deletedActor[0],
  });
};

const getActorMovies = (req, res) => {
  const id = Number(req.params.id);

  const actor = actors.find((actor) => actor.id === id);

  if (!actor) {
    return res.status(404).json({
      message: "Actor not found",
    });
  }

  const actorMovies = movies.filter((movie) => movie.cast.includes(id));

  res.json(actorMovies);
};

module.exports = {
  getActors,
  addActor,
  deleteActor,
  getActorMovies,
};
