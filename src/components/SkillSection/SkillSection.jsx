import "./SkillSection.sass";
import { AiFillHtml5 } from "react-icons/ai";
import { SiReactrouter } from "react-icons/si";

const cards = [
  {
    title: "HTML5",
    p1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ab unde quod ducimus illum magni dolorem. ",
    p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ab unde quod ducimus illum magni dolorem. ",
    icon: <AiFillHtml5 />,
    link: "/legal",
    list: ["legal 1", "legal 2", "legal 3"],
  },
  {
    title: "React-Router",
    p1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ab unde quod ducimus illum magni dolorem. ",
    p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ab unde quod ducimus illum magni dolorem. ",
    icon: <SiReactrouter />,
    link: "/legal",
    list: ["legal 1", "legal 2", "legal 3"],
  },
];

const SkillSection = () => {
  return (
    <section className="skill-section">
      <div className="skill-section-container">
        <h2>Habilidades e Projetos</h2>
        {cards &&
          cards.map((card, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-content">
                <h4>{card.title}</h4>
                <p>{card.p1}</p>
                <p>{card.p2}</p>
                <ul>
                  {card.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href={card.link} className="btn">
                  Acesse o projeto
                </a>
              </div>
              <div className="img-container">
                {card.icon}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SkillSection;
