import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-6">Add Movie</h1>
        <input
          className="border p-2 w-full mb-4"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          placeholder="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <h2 className="font-bold mb-2">Select Cast</h2>
        {actors.map((actor) => (
          <label key={actor._id} className="block">
            <input
              type="checkbox"
              checked={cast.includes(actor._id)}
              onChange={() => handleCheckbox(actor._id)}
            />
            <span className="ml-2">{actor.name}</span>
          </label>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-6 w-full">
          Add Movie
        </button>
        <Link to="/" className="block text-center mt-4 text-blue-600">
          Back
        </Link>
      </form>
    </div>
  );
}

export default AddMovie;
