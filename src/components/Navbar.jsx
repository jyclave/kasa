import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="navbar__logo" src="/LOGO.png" alt="Logo Kasa" />
      </div>
      <div className="navbar__link--container">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }
          end
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/apropos"
          className={({ isActive }) => 
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;