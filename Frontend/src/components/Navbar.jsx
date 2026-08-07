import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logoutUser, getMe } from "../api/authApi";

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? "bg-amber-500 text-neutral-900"
      : "text-neutral-300 hover:bg-neutral-800 hover:text-amber-400"
  }`;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMe()
      .then((res) => setUser(res.data.data))
      .catch(() => setUser(null));
  }, [location.pathname]);

  async function handleLogout() {
    try {
      await logoutUser();
    } catch (err) {
      console.error("Logout request failed:", err);
    } finally {
      localStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    }
  }

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-amber-400"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          <span>ActorDB</span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/add" className={linkClass}>
            Add Actor
          </NavLink>
          <NavLink to="/add-movie" className={linkClass}>
            Add Movie
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

          {user ? (
            <>
              <NavLink to="/my-contributions" className={linkClass}>
                My Contributions
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-amber-400"
              >
                Logout
              </button>
              <div
                className="w-9 h-9 rounded-full bg-amber-500 text-neutral-900 font-bold flex items-center justify-center text-sm select-none"
                title={user.name}
              >
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <NavLink to="/signup" className={linkClass}>
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
