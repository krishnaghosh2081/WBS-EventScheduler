import { NavLink } from "react-router";
import  {useAuthenticationContext}  from '../context/AuthenticationContext';


const Navbar = () => {
  const { token} = useAuthenticationContext();
  
  const { deleteToken} = useAuthenticationContext();
  console.log(token);
    const isAuthenticated = !!token;
  return (
    <div className='navbar bg-base-300 shadow-sm'>
      
      <div className='navbar-end'>
        <nav className='menu menu-horizontal items-baseline gap-2 bg-amber-200 rounded-lg p-2 flex '>
          <NavLink to="/">
            Home
          </NavLink>
          {!isAuthenticated ? <NavLink to="/login">
            login
          </NavLink> : <button className="btn" onClick={() => {
            deleteToken();
            window.location.reload();
           window.location.href = '/';

          }}>
            Logout
          </button>
      }
          </nav>
      </div>
    </div>
  );
};

export default Navbar;
