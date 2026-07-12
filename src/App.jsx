import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";
import AddActor from "./pages/AddActor";
import AddMovie from "./pages/AddMovie";

import actorsData from "./data/actors";
import moviesData from "./data/movies";

function App() {
  const [actors, setActors] = useState(actorsData);
  const [movies, setMovies] = useState(moviesData);

  const addActor = (newActor) => {
    setActors([...actors, newActor]);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const deleteActor = (id) => {
    setActors(actors.filter((actor) => actor.id !== id));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<ActorGrid actors={actors} deleteActor={deleteActor} />}
      />

      <Route
        path="/actor/:id"
        element={<ActorDetail actors={actors} movies={movies} />}
      />

      <Route path="/add" element={<AddActor addActor={addActor} />} />

      <Route
        path="/add-movie"
        element={<AddMovie actors={actors} addMovie={addMovie} />}
      />
    </Routes>
  );
}

export default App;
