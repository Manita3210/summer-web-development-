function ActorCard(props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-72 text-center">
      <img
        src={props.photo}
        alt={props.name}
        className="w-40 h-40 obectcover rounded-full mx-auto"
      />

      <h2 className="text-2xl font-bold mt-4">{props.name}</h2>

      <p className="text-gray-600 mt-2">Born: {props.birthYear}</p>

      <p className="text-gray-600">Total Films: {props.totalFilms}</p>
    </div>
  );
}

export default ActorCard;
