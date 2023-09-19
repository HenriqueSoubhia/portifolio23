import "./SkillSection.sass";
import { AiFillHtml5 } from "react-icons/ai";
import { SiReactrouter } from "react-icons/si";

import Layout from "/projeto-html.png";
import Sass from "/projeto-sass.png";
import Firebase from "/projeto-firebase.png";

const cards = [
  {
    title: "SASS",
    p1: "Este projeto foi desenvolvido como parte do curso 'SASS e SCSS do básico ao avançado + Projetos'",
    p2: "Com o objetivo de dominar o SASS e aprimorar as habilidades de estruturação de projetos de forma mais profissional e expansiva.",
    icon: Sass,
    link: "https://henriquesoubhia.github.io/projeto-electrum-SASS/",
    list: [
      "HTML, com as boas praticas de SEO",
      "Arquitetura de pastas SASS",
      "Layout responsivo",
    ],
  },
  {
    title: "React e Firebase",
    p1: "Neste projeto, desenvolvi um aplicativo de lista de tarefas (Todo App) com funcionalidade CRUD (Create, Read, Update, Delete)",
    p2: "Utilizando o React como framework front-end. O Firebase é usado como banco de dados em tempo real para armazenar as tarefas",
    icon: Firebase,
    link: "https://henriquesoubhia.github.io/to-do-firebase/",
    list: [
      "Atualização em tempo real",
      "React com boas praticas",
      "Firebase como banco de dados",
    ],
  },
  {
    title: "HTML5 e CSS 3",
    p1: "Neste projeto, recriei o layout do vídeo 'Como é o HTML e CSS de um Estagiário?' utilizando HTML e CSS.",
    p2: "O objetivo foi praticar minhas habilidades em front-end e reproduzir fielmente o design apresentado.",
    icon: Layout,
    link: "https://henriquesoubhia.github.io/treino-layout/",
    list: [
      "HTML, com as boas praticas de SEO",
      "CSS, flexbox, grid e @media",
      "Layout responsivo",
    ],
  },
];

const SkillSection = () => {
  return (
    <section id="skill" className="skill-section">
      <div className="skill-section-container">
        <h2>Habilidades e Projetos</h2>
        {cards &&
          cards.map((card, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-content">
                <h4>{card.title}</h4>
                <p>{card.p1}</p>
                <p>{card.p2}</p>
                <img src={card.icon} alt={card.title} />
                <ul>
                  {card.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href={card.link} target="_blanck" className="btn">
                  Acesse o projeto
                </a>
              </div>
              <div className="img-container">
                <img src={card.icon} alt={card.title} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SkillSection;
