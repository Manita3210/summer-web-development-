import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";
import AddActor from "./pages/AddActor";

import actorsData from "./data/actors";
import moviesData from "./data/movies";

function App() {
  const [actors, setActors] = useState(actorsData);
  const [movies, setMovies] = useState(moviesData);

  const addActor = (newActor) => {
    setActors([...actors, newActor]);
  };

  return (
    <Routes>
      <Route path="/" element={<ActorGrid actors={actors} />} />

      <Route
        path="/actor/:id"
        element={<ActorDetail actors={actors} movies={movies} />}
      />

      <Route path="/add" element={<AddActor addActor={addActor} />} />
    </Routes>
  );
}

export default App;
