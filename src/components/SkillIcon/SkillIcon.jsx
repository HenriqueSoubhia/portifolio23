import { useState } from "react";
import "./SkillIcon.sass";

const SkillIcon = ({ skill }) => {
  const [over, setOver] = useState(false);

  return (
    <div id={skill.name} className="skill-icon"
      onMouseEnter={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
    >
      {skill.icon}
      {over && <p>{skill.name}</p>}
    </div>
  );
};

export default SkillIcon;
