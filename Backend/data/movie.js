import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  genre: { type: String, trim: true },
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
});

const movie = mongoose.model("Movie", movieSchema);

export default movie;
