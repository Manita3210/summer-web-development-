import mongoose from "mongoose";

const actorSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  birthYear: { type: Number, required: true },
  totalFilms: { type: Number, required: true },
  photo: { type: String, required: true, trim: true },
  bio: { type: String, required: true, trim: true },
  movies: { type: [String], required: true },
});

const actor = mongoose.model("Actor", actorSchema);

export default actor;
