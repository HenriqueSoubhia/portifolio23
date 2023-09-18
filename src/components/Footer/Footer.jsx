import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.sass";
import CanvasComponent from "../CanvasComponent";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="canvas-container">
            <CanvasComponent args={[3, 3, 3]}/>
          </div>
          <div>
            <div className="info-container">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Habilidades</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>Contato</h4>
                </li>
                <li>+55 11 99625-0147</li>
                <li>soubhiahenrique0@gmail.com</li>
              </ul>
            </div>
            <div className="social-container">
              <h4>Social</h4>
              <div>
                <a href="">
                  <AiFillGithub />
                </a>
                <a href="">
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
