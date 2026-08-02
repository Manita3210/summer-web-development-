import { useState, useEffect } from "react";
import api from "../api/api";

export default function MyContributions() {
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMine() {
      try {
        const [actorsRes, moviesRes] = await Promise.all([
          api.get("/actors/mine"),
          api.get("/movies/mine"),
        ]);
        setActors(actorsRes.data);
        setMovies(moviesRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMine();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">
        My Contributions
      </h2>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">
          Actors you added ({actors.length})
        </h3>
        {actors.length === 0 ? (
          <p className="text-neutral-500">You haven't added any actors yet.</p>
        ) : (
          <ul className="space-y-2">
            {actors.map((a) => (
              <li key={a._id} className="bg-white p-3 rounded-lg shadow-sm">
                {a.name}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">
          Movies you added ({movies.length})
        </h3>
        {movies.length === 0 ? (
          <p className="text-neutral-500">You haven't added any movies yet.</p>
        ) : (
          <ul className="space-y-2">
            {movies.map((m) => (
              <li key={m._id} className="bg-white p-3 rounded-lg shadow-sm">
                {m.title} ({m.year})
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
