import SkillIcon from "../SkillIcon/SkillIcon";
import "./AboutSection.sass";
import Eu from "/eu.jpg";

import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoFirebase,
} from "react-icons/bi";

import { AiFillHtml5 } from "react-icons/ai";

import { SiReactrouter } from "react-icons/si";

import { DiSass } from "react-icons/di";

const skills = [
  {
    name: "HTML5",
    icon: <AiFillHtml5 />,
  },
  {
    name: "CSS3",
    icon: <BiLogoCss3 />,
  },
  {
    name: "Javascript",
    icon: <BiLogoJavascript />,
  },
  {
    name: "React",
    icon: <BiLogoReact />,
  },
  {
    name: "React-Router",
    icon: <SiReactrouter />,
  },
  {
    name: "Firebase",
    icon: <BiLogoFirebase />,
  },
  {
    name: "Sass",
    icon: <DiSass />,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="img-container">
        <img src={Eu} alt="Foto de Henrique Soubhia" />
      </div>
      <div className="text-container">
        <h2>Sobre</h2>
        <p>
          Olá, sou Henrique Soubhia, um desenvolvedor web dedicado à arte da
          construção digital. Minha maior motivação é a satisfação de dar vida a
          ideias e projetos através da programação.
        </p>
        <p>
          Com uma mente aberta para desafios e uma paixão por aprender, estou em
          constante evolução. Além do desenvolvimento web, compartilho meu
          conhecimento para tornar a programação mais acessível e inspirar
          outros a explorar esse mundo digital.
        </p>
        <div className="skills-container">
          {skills.map((skill, i) => (
            <SkillIcon key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
