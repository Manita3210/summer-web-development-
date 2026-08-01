function FilmographyList({ movies }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3 text-neutral-800">Filmography</h2>

      {movies.length === 0 ? (
        <p className="text-neutral-400 text-sm">No movies listed yet.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1 text-neutral-600">
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilmographyList;
