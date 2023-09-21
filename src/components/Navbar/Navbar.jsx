import { useEffect,useState } from "react";
import "./Navbar.sass";

const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <p className="brand">
          Henrique <span>Soubhia</span>
        </p>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skill">Habilidades</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
