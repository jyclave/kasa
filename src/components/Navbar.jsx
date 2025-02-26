
import logo from "../images/LOGO.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
      <img className="navbar__logo" src={logo} alt="Logo Kasa" />
      </div>
      <div className="navbar__link--container">
        <a className="navbar__link" href="/HomePage">Acceuil</a>
        <a className="navbar__link" href="/AproposPage">A Propos</a>

      </div>
    </nav>
    );
  };

export default Navbar;
