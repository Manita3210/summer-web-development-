import ActorCard from "./ActorCard";
import { useState } from "react";

function ActorGrid({ actors, deleteActor, onSearch }) {
  const [query, setQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  const currentUserId = storedUser?._id;

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveSearch(query.trim());
    onSearch(query);
  };

  const handleViewAllActors = () => {
    setQuery("");
    setActiveSearch("");
    onSearch("");
  };

  const handleDelete = async (id) => {
    setDeleteError("");
    try {
      await deleteActor(id);
    } catch (err) {
      if (err.response?.status === 403) {
        setDeleteError(
          "Permission denied. You can only delete your own actor profiles.",
        );
      }
    }
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
        </div>

        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center gap-2 mb-12"
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

        {activeSearch && (
          <div className="text-center mb-8">
            <p className="text-neutral-700 font-medium">
              Showing results for{" "}
              <span className="text-neutral-900 font-semibold">
                "{activeSearch}"
              </span>
            </p>
            <button
              type="button"
              onClick={handleViewAllActors}
              className="mt-2 text-sm font-medium text-amber-500 hover:text-amber-400"
            >
              ← View All Actors
            </button>
          </div>
        )}

        {deleteError && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 max-w-2xl mx-auto mb-8">
            {deleteError}
          </div>
        )}

        {actors.length === 0 ? (
          <p className="text-center text-neutral-500">No actors found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actors.map((actor) => {
              const isOwned = Boolean(
                currentUserId && actor.addedBy?.toString() === currentUserId,
              );
              return (
                <div key={actor._id} className="flex flex-col items-center">
                  <ActorCard
                    id={actor._id}
                    name={actor.name}
                    birthYear={actor.birthYear}
                    totalFilms={actor.totalFilms}
                    photo={actor.photo}
                  />
                  {isOwned && (
                    <>
                      <span className="mt-3 text-xs font-medium bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
                        Your Contribution
                      </span>
                      <button
                        onClick={() => handleDelete(actor._id)}
                        className="mt-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition text-sm font-medium"
                      >
                        Delete Actor
                      </button>
                    </>
                  )}
                  {currentUserId && !isOwned && (
                    <span className="mt-3 text-xs font-medium bg-neutral-200 text-neutral-600 px-2.5 py-1 rounded-full">
                      Community Contribution
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ActorGrid;
