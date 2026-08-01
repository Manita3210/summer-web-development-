import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";
import AddActor from "./pages/AddActor";
import AddMovie from "./pages/AddMovie";
import api from "./api/api";
import Dashboard from "./pages/Dashboard";

function App() {
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchActors();
    fetchMovies();
  }, []);

  const fetchActors = async (search = "") => {
    const res = await api.get("/actors", { params: { search } });
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
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ActorGrid
              actors={actors}
              deleteActor={deleteActor}
              onSearch={fetchActors}
            />
          }
        />
        <Route path="/actor/:id" element={<ActorDetail actors={actors} />} />
        <Route path="/add" element={<AddActor addActor={addActor} />} />
        <Route
          path="/add-movie"
          element={<AddMovie actors={actors} addMovie={addMovie} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
