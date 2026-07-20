import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/dashboard").then((res) => setData(res.data));
  }, []);

  if (!data) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-4 max-w-md">
        <p className="text-gray-600">Total Actors in Database</p>
        <p className="text-3xl font-bold">{data.totalActors}</p>
      </div>
      {data.mostCastActor && (
        <div className="bg-white rounded-xl shadow p-6 max-w-md">
          <p className="text-gray-600">Most-Cast Actor</p>
          <p className="text-3xl font-bold">{data.mostCastActor.name}</p>
          <p className="text-gray-600">
            {data.mostCastActor.movieCount} movies
          </p>
        </div>
      )}
      <Link
        to="/"
        className="inline-block mt-8 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default Dashboard;
