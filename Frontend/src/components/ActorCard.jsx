import { Link } from "react-router-dom";

function ActorCard(props) {
  return (
    <Link to={`/actor/${props.id}`} className="w-full max-w-72">
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-amber-400">
        <img
          src={props.photo}
          alt={props.name}
          className="w-32 h-32 object-cover rounded-full mx-auto ring-4 ring-neutral-100"
        />

        <h2 className="text-xl font-bold mt-4 text-neutral-900">
          {props.name}
        </h2>

        <p className="text-neutral-500 text-sm mt-2">Born {props.birthYear}</p>

        <span className="inline-block mt-2 text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
          {props.totalFilms} films
        </span>
      </div>
    </Link>
  );
}

export default ActorCard;
