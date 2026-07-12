const actors = require("../../data/actors");

const getActors = (req, res) => {
  res.json(actors);
};

module.exports = {
  getActors,
};
