import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/authApi";

export default function Signup() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleUserInput(e) {
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [e.target.name]: value }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);
    try {
      const response = await registerUser(userInfo);
      const user = response.data.data;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      const message = error.response?.data?.error || "Something went wrong";
      setErrors((prev) => [...prev, message]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-neutral-100 flex items-center justify-center px-6 py-12">
      <form
        onSubmit={handleSignup}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-5"
      >
        <h1
          className="text-3xl font-bold text-neutral-900 mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Sign Up
        </h1>

        {errors.length > 0 && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            <ul className="list-disc pl-5">
              {errors.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleUserInput}
            className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleUserInput}
            className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-neutral-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleUserInput}
            className="border border-neutral-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-amber-500 text-neutral-900 font-semibold px-4 py-2.5 rounded-lg hover:bg-amber-400 transition disabled:opacity-50"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}
