import { useParams, Link } from "react-router-dom";
import actors from "../data/actors";
import FilmographyList from "../components/FilmographyList";

function ActorDetail() {
  const { id } = useParams();

  const actor = actors.find((actor) => actor.id === Number(id));

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

        <FilmographyList movies={actor.movies} />

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ActorDetail;
