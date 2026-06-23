import { NavLink } from 'react-router';
import { useAuthenticationContext } from '../context/AuthenticationContext';

import logo from '../assets/logo.png';

const Navbar = () => {
  const { token } = useAuthenticationContext();

  const { deleteToken } = useAuthenticationContext();
  //console.log(token);
  const isAuthenticated = !!token;
  return (
    <div className="navbar bg-base-100 shadow-md rounded-box px-4">
      {/* Logo Placeholder */}
      <div className="navbar-start">
        <img src={logo} alt="No FOMO Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation */}
      <div className="navbar-end">
        <nav className="menu menu-horizontal items-center gap-2 p-2">
          <NavLink to="/" className="btn btn-ghost btn-sm">
            Home
          </NavLink>

          <NavLink to="/create-event" className="btn btn-ghost btn-sm">
            Create Event
          </NavLink>

          {!isAuthenticated ? (
            <NavLink to="/login" className="btn btn-ghost btn-sm">
              Login
            </NavLink>
          ) : (
            <button
              className="btn btn-outline btn-sm"
              onClick={() => {
                deleteToken();
                window.location.reload();
                window.location.href = '/';
              }}
            >
              Logout
            </button>
          )}

          {!isAuthenticated ? (
            <NavLink to="/signup" className="btn btn-primary btn-sm">
              Signup
            </NavLink>
          ) : null}

          {/* ===========Theme logic======================================
          ===========================================================
          =========================================================== */}

          {/* drop down theme choose goes here */}
          {/* Theme Selector */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              Theme
              <svg
                width="12px"
                height="12px"
                className="h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] mt-2 max-h-96 w-52 overflow-y-auto rounded-box bg-base-200 p-2 shadow-2xl"
            >
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Light"
                  value="light"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Dark"
                  value="dark"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Cupcake"
                  value="cupcake"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Bumblebee"
                  value="bumblebee"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Emerald"
                  value="emerald"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Corporate"
                  value="corporate"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Synthwave"
                  value="synthwave"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Retro"
                  value="retro"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Cyberpunk"
                  value="cyberpunk"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Valentine"
                  value="valentine"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Halloween"
                  value="halloween"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Garden"
                  value="garden"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Forest"
                  value="forest"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Aqua"
                  value="aqua"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Luxury"
                  value="luxury"
                />
              </li>
            </ul>
          </div>

          {/* =================end of theme============================== */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
