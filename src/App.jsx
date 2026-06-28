import ActorCard from "./components/ActorCard";
import robert from "./assets/robert.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ActorCard
        name="Robert Downey Jr."
        birthYear={1965}
        totalFilms={3}
        photo={robert}
      />
    </div>
  );
}
export default App;
