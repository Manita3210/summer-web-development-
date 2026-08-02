import * as actorModel from "../models/actorModel.js";
import movie from "../../data/movie.js";

export const getActors = async (req, res) => {
  const actors = await actorModel.getAll(req.query.search);
  res.json(actors);
};

export const addActor = async (req, res) => {
  const newActor = await actorModel.add({ ...req.body, addedBy: req.userId });
  res
    .status(201)
    .json({ message: "Actor added successfully", actor: newActor });
};

export const getMyActors = async (req, res) => {
  const actors = await actorModel.getMine(req.userId);
  res.json(actors);
};

// export const deleteActor = async (req, res) => {
//   const deletedActor = await actorModel.deleteActor(req.params.id);
//   if (!deletedActor) {
//     return res.status(404).json({ message: "Actor not found" });
//   }
//   res.json({ message: "Actor deleted successfully", actor: deletedActor });
// };

export const deleteActor = async (req, res) => {
  const existing = await actorModel.getById(req.params.id);
  if (!existing) {
    return res.status(404).json({ message: "Actor not found" });
  }
  if (existing.addedBy?.toString() !== req.userId) {
    return res
      .status(403)
      .json({ message: "You can only delete actors you added" });
  }
  const deletedActor = await actorModel.deleteActor(req.params.id);
  res.json({ message: "Actor deleted successfully", actor: deletedActor });
};

export const getActorMovies = async (req, res) => {
  const actorMovies = await movie.find({ cast: req.params.id });
  res.json(actorMovies);
};

export const getCostars = async (req, res) => {
  const id = req.params.id;
  const actorMovies = await movie
    .find({ cast: id })
    .populate("cast", "name photo birthYear");

  const costarsMap = new Map();
  actorMovies.forEach((m) => {
    m.cast.forEach((castActor) => {
      if (castActor._id.toString() !== id) {
        costarsMap.set(castActor._id.toString(), castActor);
      }
    });
  });

  res.json(Array.from(costarsMap.values()));
};
