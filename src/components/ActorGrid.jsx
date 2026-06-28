import ActorCard from "./ActorCard";
import actors from "../data/actors";

function ActorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {actors.map((actor) => (
        <ActorCard
          key={actor.id}
          name={actor.name}
          birthYear={actor.birthYear}
          totalFilms={actor.totalFilms}
          photo={actor.photo}
        />
      ))}
    </div>
  );
}
export default ActorGrid;
