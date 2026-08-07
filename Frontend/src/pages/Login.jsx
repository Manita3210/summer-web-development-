import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/authApi";

export default function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleUserInput(e) {
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [e.target.name]: value }));
  }

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);
    try {
      const response = await loginUser(userInfo);
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
    <div className="min-h-[calc(100vh-72px)] bg-neutral-100 flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-md space-y-6"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-neutral-900"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            ActorDatabase
          </h1>
          <p className="text-neutral-500 text-sm mt-1.5">
            Sign in to your account
          </p>
        </div>

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
          <label className="block mb-1.5 text-sm font-medium text-neutral-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            onChange={handleUserInput}
            className="w-full border border-neutral-300 rounded-lg p-3 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
            required
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-medium text-neutral-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleUserInput}
            className="w-full border border-neutral-300 rounded-lg p-3 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-500 text-neutral-900 font-semibold px-4 py-3 rounded-lg hover:bg-amber-400 transition disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          {isLoading ? "Logging In..." : "Log In"}
        </button>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="text-sm text-neutral-400">or</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <p className="text-sm text-neutral-500 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-amber-500 hover:text-amber-400"
          >
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
}
