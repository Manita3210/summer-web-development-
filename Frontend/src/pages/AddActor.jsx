import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddActor({ addActor }) {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [totalFilms, setTotalFilms] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActor = {
      id: Number(id),
      name,
      birthYear: Number(birthYear),
      totalFilms: Number(totalFilms),
      photo,
      bio: "",
      movies: [],
    };

    addActor(newActor);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Actor ID</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Actor Name</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Birth Year</label>
          <input
            type="number"
            className="border rounded-lg p-2 w-full"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Total Films</label>
          <input
            type="number"
            className="border rounded-lg p-2 w-full"
            value={totalFilms}
            onChange={(e) => setTotalFilms(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Actor Photo</label>
          <input
            type="file"
            className="border rounded-lg p-2 w-full"
            onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-8"
          >
            Add Actor
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mb-8"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddActor;
