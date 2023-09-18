import "./AboutSection.sass";
import Eu from '/eu.jpg'

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
      </div>
    </section>
  );
};

export default AboutSection;
