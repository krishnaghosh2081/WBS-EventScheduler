import { NavLink } from 'react-router';
import { useAuthenticationContext } from '../context/AuthenticationContext';

const Navbar = () => {
  const { token } = useAuthenticationContext();

  const { deleteToken } = useAuthenticationContext();
  //console.log(token);
  const isAuthenticated = !!token;
  return (
    <div className="navbar bg-base-100 shadow-md rounded-box px-4">
      {/* Logo Placeholder */}
      <div className="navbar-start">
        <div className="w-12 h-12 rounded-box border border-base-300 flex items-center justify-center">
          No FOMO
        </div>
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
