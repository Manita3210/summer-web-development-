import * as actorModel from "../models/actorModel.js";
import movies from "../../data/movies.js";

export const getActors = async (req, res) => {
  const actors = await actorModel.getAll();
  res.json(actors);
};

export const addActor = async (req, res) => {
  const newActor = await actorModel.add(req.body);
  res
    .status(201)
    .json({ message: "Actor added successfully", actor: newActor });
};

export const deleteActor = async (req, res) => {
  const deletedActor = await actorModel.deleteActor(req.params.id);
  if (!deletedActor) {
    return res.status(404).json({ message: "Actor not found" });
  }
  res.json({ message: "Actor deleted successfully", actor: deletedActor });
};

export const getActorMovies = async (req, res) => {
  const id = req.params.id;
  const actorMovies = movies.filter((movie) => movie.cast.includes(id));
  res.json(actorMovies);
};

export const getCostars = async (req, res) => {
  const id = req.params.id;
  const actorMovies = movies.filter((movie) => movie.cast.includes(id));

  const costarIds = [];
  actorMovies.forEach((movie) => {
    movie.cast.forEach((actorId) => {
      if (actorId !== id && !costarIds.includes(actorId)) {
        costarIds.push(actorId);
      }
    });
  });

  const allActors = await actorModel.getAll();
  const costars = allActors.filter((actor) =>
    costarIds.includes(actor._id.toString()),
  );
  res.json(costars);
};
