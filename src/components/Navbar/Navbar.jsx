import { useEffect,useState } from "react";
import "./Navbar.sass";

const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  console.log(scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={scrollY >= 500 ? "navbar navbar-down" : "navbar"}>
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
