import ActorGrid from "./components/ActorGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Actor Profile Database
      </h1>

      <ActorGrid />
    </div>
  );
}

export default App;
