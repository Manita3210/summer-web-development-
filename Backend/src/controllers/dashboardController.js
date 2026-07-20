import actor from "../../data/actor.js";
import movie from "../../data/movie.js";

export const getDashboard = async (req, res) => {
  const totalActors = await actor.countDocuments();

  const result = await movie.aggregate([
    { $unwind: "$cast" },
    { $group: { _id: "$cast", movieCount: { $sum: 1 } } },
    { $sort: { movieCount: -1 } },
    { $limit: 1 },
  ]);

  let mostCastActor = null;
  if (result.length > 0) {
    const found = await actor.findById(result[0]._id);
    if (found)
      mostCastActor = { name: found.name, movieCount: result[0].movieCount };
  }

  res.json({ totalActors, mostCastActor });
};
