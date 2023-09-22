import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.sass";
import CanvasComponent from "../CanvasComponent";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="canvas-container">
            <CanvasComponent args={[3, 3, 3]} />
          </div>
          <div>
            <div className="info-container">
              <ul>
                <li>
                  <p className="bold">Navegação</p>
                </li>
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
              <ul>
                <li>
                  <p className="bold">Contato</p>
                </li>
                <li>+55 11 99625-0147</li>
                <li>soubhiahenrique0@gmail.com</li>
              </ul>
            </div>
            <div className="social-container">
              <p className="bold">Social</p>
              <div>
                <a
                  href="https://github.com/HenriqueSoubhia"
                  aria-label="Github"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/henrique-soubhia/"
                  aria-label="Linkedin"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Henrique <span>Soubhia</span>
          </p>
          <p>&copy; 2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
