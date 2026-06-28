function FilmographyList({ movies }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-3">Filmography</h2>

      <ul className="list-disc list-inside space-y-2">
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmographyList;
