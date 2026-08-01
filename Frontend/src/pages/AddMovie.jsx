import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie({ actors, addMovie }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState([]);

  const handleCheckbox = (actorId) => {
    setCast(
      cast.includes(actorId)
        ? cast.filter((id) => id !== actorId)
        : [...cast, actorId],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie({ title, year: Number(year), genre, cast });
    navigate("/");
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex justify-center items-center bg-neutral-100 px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h1
          className="text-3xl font-bold text-neutral-900"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Add Movie
        </h1>

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Movie Title
          </label>
          <input
            className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-neutral-700">
              Year
            </label>
            <input
              type="number"
              className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-neutral-700">
              Genre
            </label>
            <input
              className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-neutral-700 mb-2">Select Cast</h2>
          <div className="max-h-40 overflow-y-auto border border-neutral-200 rounded-lg p-3 space-y-2">
            {actors.length === 0 && (
              <p className="text-sm text-neutral-400">
                No actors yet — add one first.
              </p>
            )}
            {actors.map((actor) => (
              <label
                key={actor._id}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="accent-amber-500 w-4 h-4"
                  checked={cast.includes(actor._id)}
                  onChange={() => handleCheckbox(actor._id)}
                />
                <span>{actor.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-amber-500 text-neutral-900 font-semibold px-4 py-2.5 rounded-lg hover:bg-amber-400 transition"
          >
            Add Movie
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 bg-neutral-200 text-neutral-700 font-semibold px-4 py-2.5 rounded-lg hover:bg-neutral-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
