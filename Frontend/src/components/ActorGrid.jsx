import ActorCard from "./ActorCard";
import { Link } from "react-router-dom";

function ActorGrid({ actors, deleteActor }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-12">
        Actor Profile Database
      </h1>

      <Link to="/add">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-8 mr-4">
          Add Actor
        </button>
      </Link>

      <Link to="/add-movie">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-8">
          Add Movie
        </button>
      </Link>

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
