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

import {DiSass} from 'react-icons/di'

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
        <img className="me" src={Eu} alt="" />
      </div>
      <div className="text-container">
        <p>Sobre</p>
        <h2>Frase bem bem bem legal, uhul top</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          labore cupiditate fugiat officiis neque quis recusandae illo enim
          iste! Eaque cupiditate quis quod harum asperiores nemo quaerat, hic
          sint. Libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          labore cupiditate fugiat officiis neque quis recusandae illo enim
          iste! Eaque cupiditate quis quod harum asperiores nemo quaerat, hic
          sint. Libero.
        </p>
        <div className="skills-container">
          {skills.map((skill, i) => (
            <SkillIcon key={i} skill={skill}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
