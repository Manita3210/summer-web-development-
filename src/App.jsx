import { Routes, Route } from "react-router-dom";
import ActorGrid from "./components/ActorGrid";
import ActorDetail from "./pages/ActorDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ActorGrid />} />
      <Route path="/actor/:id" element={<ActorDetail />} />
    </Routes>
  );
}

export default App;
