import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? "bg-amber-500 text-neutral-900"
      : "text-neutral-300 hover:bg-neutral-800 hover:text-amber-400"
  }`;

function Navbar() {
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

        <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
