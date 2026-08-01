import ActorCard from "./ActorCard";
import { useState } from "react";

function ActorGrid({ actors, deleteActor, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="bg-gradient-to-b from-neutral-100 to-neutral-200 min-h-[calc(100vh-72px)] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1
            className="text-4xl md:text-5xl font-bold text-neutral-900"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Actor Profile Database
          </h1>
          <p className="text-neutral-500 mt-2">
            Browse actors, their films, and frequent collaborators.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-2 mb-12"
        >
          <input
            className="border border-neutral-300 rounded-lg px-4 py-2 w-72 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Search actors by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-500 text-neutral-900 font-medium px-5 py-2 rounded-lg hover:bg-amber-400 transition shadow-sm"
          >
            Search
          </button>
        </form>

        {actors.length === 0 ? (
          <p className="text-center text-neutral-500">No actors found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actors.map((actor) => (
              <div key={actor._id} className="flex flex-col items-center">
                <ActorCard
                  id={actor._id}
                  name={actor.name}
                  birthYear={actor.birthYear}
                  totalFilms={actor.totalFilms}
                  photo={actor.photo}
                />
                <button
                  onClick={() => deleteActor(actor._id)}
                  className="mt-3 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition text-sm font-medium"
                >
                  Delete Actor
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ActorGrid;
