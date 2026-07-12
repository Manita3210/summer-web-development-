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

module.exports = {
  getActors,
  addActor,
};
