import ActorCard from "./ActorCard";
import { Link } from "react-router-dom";
import { useState } from "react";

function ActorGrid({ actors, deleteActor, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-12">
        Actor Profile Database
      </h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <Link to="/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Actor
          </button>
        </Link>
        <Link to="/add-movie">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Movie
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Dashboard
          </button>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="flex justify-center gap-2 mb-8">
        <input
          className="border rounded-lg p-2 w-72"
          placeholder="Search actors by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {actors.map((actor) => (
          <div key={actor._id}>
            <ActorCard
              id={actor._id}
              name={actor.name}
              birthYear={actor.birthYear}
              totalFilms={actor.totalFilms}
              photo={actor.photo}
            />
            <button
              onClick={() => deleteActor(actor._id)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition block mx-auto"
            >
              Delete Actor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActorGrid;
