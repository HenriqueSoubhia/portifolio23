import "./Navbar.sass";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="brand">
          Henrique <span>Soubhia</span>
        </a>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
