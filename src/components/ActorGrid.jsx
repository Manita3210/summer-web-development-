import ActorCard from "./ActorCard";
import actors from "../data/actors";

function ActorGrid() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Actor Profile Database
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {actors.map((actor) => (
          <ActorCard
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
