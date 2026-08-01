import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddActor({ addActor }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [totalFilms, setTotalFilms] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); // base64 data URL, stored directly as the photo string
    };
    reader.readAsDataURL(file);
  };

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
    <div className="min-h-[calc(100vh-72px)] bg-neutral-100 flex items-center justify-center px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-5"
      >
        <h1
          className="text-3xl font-bold text-neutral-900 mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Add Actor
        </h1>

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Actor Name
          </label>
          <input
            className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-neutral-700">
              Birth Year
            </label>
            <input
              type="number"
              className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-neutral-700">
              Total Films
            </label>
            <input
              type="number"
              className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={totalFilms}
              onChange={(e) => setTotalFilms(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Bio
          </label>
          <textarea
            className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Photo
          </label>

          <div className="flex items-center gap-4">
            {photo && (
              <img
                src={photo}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-300"
              />
            )}

            <label className="flex-1 cursor-pointer">
              <span className="block text-center border border-neutral-300 rounded-lg p-2.5 text-sm text-neutral-600 hover:bg-neutral-50 transition">
                Choose file
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                required={!photo}
              />
            </label>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-amber-500 text-neutral-900 font-semibold px-4 py-2.5 rounded-lg hover:bg-amber-400 transition"
          >
            Add Actor
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 bg-neutral-200 text-neutral-700 font-semibold px-4 py-2.5 rounded-lg hover:bg-neutral-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddActor;
