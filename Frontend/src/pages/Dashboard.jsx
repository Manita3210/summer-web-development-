import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/dashboard").then((res) => setData(res.data));
  }, []);

  if (!data) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
        <p className="text-neutral-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-neutral-100 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-8 text-neutral-900"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Dashboard
        </h1>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-neutral-500 text-sm">Total Actors in Database</p>
            <p className="text-4xl font-bold text-amber-500 mt-2">
              {data.totalActors}
            </p>
          </div>

          {data.mostCastActor && (
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-neutral-500 text-sm">Most-Cast Actor</p>
              <p className="text-3xl font-bold text-neutral-900 mt-2">
                {data.mostCastActor.name}
              </p>
              <p className="text-neutral-500 mt-1">
                {data.mostCastActor.movieCount} movies
              </p>
            </div>
          )}
        </div>

        <Link
          to="/"
          className="inline-block mt-10 bg-amber-500 text-neutral-900 font-semibold px-5 py-2 rounded-lg hover:bg-amber-400 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
