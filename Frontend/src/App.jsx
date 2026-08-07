import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";
import AddActor from "./pages/AddActor";
import AddMovie from "./pages/AddMovie";
import api from "./api/api";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyContributions from "./pages/MyContributions";

function App() {
  const location = useLocation();
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);
  const allActorsRef = useRef([]);

  useEffect(() => {
    fetchActors();
    fetchMovies();
  }, []);

  const fetchActors = async (search = "") => {
    if (!search) {
      setActors(allActorsRef.current);
    }
    const res = await api.get("/actors", { params: { search } });
    setActors(res.data);
    if (!search) {
      allActorsRef.current = res.data;
    }
  };

  useLayoutEffect(() => {
    if (location.pathname === "/") {
      fetchActors("");
    }
  }, [location]);

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
              key={location.key}
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-contributions" element={<MyContributions />} />
      </Routes>
    </div>
  );
}

export default App;
