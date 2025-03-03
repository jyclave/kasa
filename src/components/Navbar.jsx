
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
      <img className="navbar__logo" src="/LOGO.png" alt="Logo Kasa" />
      </div>
      <div className="navbar__link--container">
        <a className="navbar__link" href="/">Accueil</a>
        <a className="navbar__link" href="/apropos">A Propos</a>

      </div>
    </nav>
    );
  };

export default Navbar;
