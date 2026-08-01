import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FilmographyList from "../components/FilmographyList";
import api from "../api/api";

function ActorDetail({ actors }) {
  const { id } = useParams();
  const [actorMovies, setActorMovies] = useState([]);
  const [costars, setCostars] = useState([]);

  const actor = actors.find((a) => a._id === id);

  useEffect(() => {
    if (!id) return;
    api.get(`/actors/${id}/movies`).then((res) => setActorMovies(res.data));
    api.get(`/actors/${id}/costars`).then((res) => setCostars(res.data));
  }, [id]);

  if (!actor) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
        <p className="text-xl text-neutral-500">Actor not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-neutral-100 flex justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">
        <img
          src={actor.photo}
          alt={actor.name}
          className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-amber-100"
        />
        <h1
          className="text-4xl font-bold text-center mt-6 text-neutral-900"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {actor.name}
        </h1>
        <p className="text-center text-neutral-500 mt-1">
          Born: {actor.birthYear}
        </p>

        <h2 className="text-xl font-bold mt-8 text-neutral-800">Biography</h2>
        <p className="mt-2 text-neutral-600 leading-relaxed">{actor.bio}</p>

        <FilmographyList movies={actorMovies.map((m) => m.title)} />

        {costars.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3 text-neutral-800">
              Frequently Works With
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-600">
              {costars.map((c) => (
                <li key={c._id}>{c.name}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to="/"
          className="inline-block mt-8 bg-amber-500 text-neutral-900 font-semibold px-5 py-2 rounded-lg hover:bg-amber-400 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ActorDetail;
