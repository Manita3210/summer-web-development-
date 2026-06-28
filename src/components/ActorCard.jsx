import { Link } from "react-router-dom";

function ActorCard(props) {
  return (
    <Link to={`/actor/${props.id}`}>
      <div className="bg-white rounded-xl shadow-lg p-6 w-72 text-center hover:shadow-xl hover:scale-105 transition">
        <img
          src={props.photo}
          alt={props.name}
          className="w-40 h-40 object-cover rounded-full mx-auto"
        />

        <h2 className="text-2xl font-bold mt-4">{props.name}</h2>

        <p className="text-gray-600 mt-2">Born: {props.birthYear}</p>

        <p className="text-gray-600">Total Films: {props.totalFilms}</p>
      </div>
    </Link>
  );
}

export default ActorCard;
