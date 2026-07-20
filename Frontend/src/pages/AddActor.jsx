import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddActor({ addActor }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [totalFilms, setTotalFilms] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addActor({
      name,
      birthYear: Number(birthYear),
      totalFilms: Number(totalFilms),
      photo,
      bio,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <div>
        <label className="block mb-1 font-medium">Actor Name</label>
        <input
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
        <label className="block mb-1 font-medium">Bio</label>
        <textarea
          className="border rounded-lg p-2 w-full"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">
          Photo (URL or filename)
        </label>
        <input
          className="border rounded-lg p-2 w-full"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Actor
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddActor;
