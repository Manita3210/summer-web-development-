import ActorCard from "./ActorCard";
import { Link } from "react-router-dom";

function ActorGrid({ actors }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-12">
        Actor Profile Database
      </h1>
      <Link to="/add">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-8">
          Add Actor
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {actors.map((actor) => (
          <ActorCard
            key={actor.id}
            id={actor.id}
            name={actor.name}
            birthYear={actor.birthYear}
            totalFilms={actor.totalFilms}
            photo={actor.photo}
          />
        ))}
      </div>
    </div>
  );
}
export default ActorGrid;
