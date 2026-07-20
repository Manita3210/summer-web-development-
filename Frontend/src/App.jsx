import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";
import AddActor from "./pages/AddActor";
import AddMovie from "./pages/AddMovie";
import api from "./api/axios";

function App() {
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchActors();
    fetchMovies();
  }, []);

  const fetchActors = async () => {
    const res = await api.get("/actors");
    setActors(res.data);
  };

  const fetchMovies = async () => {
    const res = await api.get("/movies");
    setMovies(res.data);
  };

  const addActor = async (newActor) => {
    await api.post("/actors", newActor);
    fetchActors();
  };

  const addMovie = async (newMovie) => {
    await api.post("/movies", newMovie);
    fetchMovies();
  };

  const deleteActor = async (id) => {
    await api.delete(`/actors/${id}`);
    fetchActors();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<ActorGrid actors={actors} deleteActor={deleteActor} />}
      />
      <Route path="/actor/:id" element={<ActorDetail actors={actors} />} />
      <Route path="/add" element={<AddActor addActor={addActor} />} />
      <Route
        path="/add-movie"
        element={<AddMovie actors={actors} addMovie={addMovie} />}
      />
    </Routes>
  );
}

export default App;
