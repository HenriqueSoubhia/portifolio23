import ReactTypingEffect from "react-typing-effect";
import CanvasComponent from "../CanvasComponent";
import "./BannerSection.sass";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="banner-section-container">
        <div>
          <h1>
            Front-end
            <ReactTypingEffect
              speed={100}
              typingDelay={500}
              ReactTypingEffect
              text={"Developer"}
            ></ReactTypingEffect>
          </h1>
          <p>Meu nome é Henrique Soubhia, sou web developer</p>
          <div className="btn-container">
            <a
              href="https://github.com/HenriqueSoubhia"
              target="_blanck"
              className="btn github"
            >
              <AiFillGithub />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-soubhia/"
              target="_blanck"
              className="btn linkedin"
            >
              <AiFillLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
        </div>
        <div>
          <CanvasComponent args={[3.5, 3.5, 3.5]} />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
