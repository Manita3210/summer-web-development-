const actor = require("../../data/actor.js");

async function getAll() {
  return actor.find();
}

async function add(actorData) {
  return await actor.create(actorData);
}

async function update(id, updates) {
  const updatedActor = await actor.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
  return updatedActor;
}

async function deleteActor(id) {
  return await actor.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  add,
  update,
  deleteActor,
};
