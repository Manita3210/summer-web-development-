import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";
import AddActor from "./pages/AddActor";
import actorsData from "./data/actors";

function App() {
  const [actors, setActors] = useState(actorsData);

  const addActor = (newactor) => {
    setActors([...actors, newactor]);
  };

  return (
    <Routes>
      <Route path="/" element={<ActorGrid actors={actors} />} />
      <Route path="/actor/:id" element={<ActorDetail />} />
      <Route path="/add" element={<AddActor addActor={addActor} />} />
    </Routes>
  );
}
export default App;
