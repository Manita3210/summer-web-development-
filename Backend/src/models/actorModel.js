import actor from "../../data/actor.js";

export async function getAll(search) {
  if (search) {
    return actor.find({ name: { $regex: search, $options: "i" } });
  }
  return actor.find();
}

export async function add(actorData) {
  return await actor.create(actorData);
}

export async function update(id, updates) {
  const updatedActor = await actor.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
  return updatedActor;
}

export async function deleteActor(id) {
  return await actor.findByIdAndDelete(id);
}

export async function getMine(userId) {
  return actor.find({ addedBy: userId });
}
