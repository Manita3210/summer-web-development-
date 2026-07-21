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
    return <h1>Actor not found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full">
        <img
          src={actor.photo}
          alt={actor.name}
          className="w-52 h-52 rounded-full mx-auto object-cover"
        />
        <h1 className="text-4xl font-bold text-center mt-6">{actor.name}</h1>
        <p className="text-center text-gray-600 mt-2">
          Born: {actor.birthYear}
        </p>
        <h2 className="text-2xl font-bold mt-8">Biography</h2>
        <p className="mt-2">{actor.bio}</p>

        <FilmographyList movies={actorMovies.map((m) => m.title)} />

        {costars.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-3">Frequently Works With</h2>
            <ul className="list-disc list-inside space-y-2">
              {costars.map((c) => (
                <li key={c._id}>{c.name}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ActorDetail;
