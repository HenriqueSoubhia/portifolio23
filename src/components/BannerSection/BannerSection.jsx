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
              text={"Developer"}
            />
          </h1>
          <p>
            Desenvolvedor Front-End, aprimorando desempenho, acessibilidade e
            usabilidade para impulsionar a excelência web em sua empresa.
          </p>
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
        <CanvasComponent args={[3.5, 3.5, 3.5]} />
      </div>
    </section>
  );
};

export default BannerSection;
