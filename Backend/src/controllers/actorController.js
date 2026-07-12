const actors = require("../../data/actors");

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

module.exports = {
  getActors,
  addActor,
  deleteActor,
};
