import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { useAuthenticationContext } from '../context/AuthenticationContext';

import logo from '../assets/logo.png';

const Navbar = () => {
  const { token } = useAuthenticationContext();

  const { deleteToken } = useAuthenticationContext();

  const isAuthenticated = !!token;

  /* ================= local storage for theme ================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  };
  /* ================= END of local storage for theme ================= */

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
                  onChange={() => handleThemeChange('light')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Dark"
                  value="dark"
                  onChange={() => handleThemeChange('dark')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Cupcake"
                  value="cupcake"
                  onChange={() => handleThemeChange('cupcake')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Bumblebee"
                  value="bumblebee"
                  onChange={() => handleThemeChange('bumblebee')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Emerald"
                  value="emerald"
                  onChange={() => handleThemeChange('emerald')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Corporate"
                  value="corporate"
                  onChange={() => handleThemeChange('corporate')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Synthwave"
                  value="synthwave"
                  onChange={() => handleThemeChange('synthwave')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Retro"
                  value="retro"
                  onChange={() => handleThemeChange('retro')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Cyberpunk"
                  value="cyberpunk"
                  onChange={() => handleThemeChange('cyberpunk')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Valentine"
                  value="valentine"
                  onChange={() => handleThemeChange('valentine')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Halloween"
                  value="halloween"
                  onChange={() => handleThemeChange('halloween')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Garden"
                  value="garden"
                  onChange={() => handleThemeChange('garden')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Forest"
                  value="forest"
                  onChange={() => handleThemeChange('forest')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Aqua"
                  value="aqua"
                  onChange={() => handleThemeChange('aqua')}
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Luxury"
                  value="luxury"
                  onChange={() => handleThemeChange('luxury')}
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
