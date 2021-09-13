import React from "react";
import AsideTitle from "./../aside-title/";
import "./cross-project-skills.scss";
import circle from "./../../assets/images/circleci-logo.svg";
import doctrine from "./../../assets/images/doctrine-logo.svg";

const cpSkills = [
  {
    icon: "o",
    name: "Docker",
  },
  {
    icon: "circle",
    name: "Circle CI",
  },
  {
    icon: "g",
    name: "Git flow",
  },
  {
    icon: "a",
    name: "SASS",
  },
  {
    icon: "m",
    name: "MySQL",
  },
  {
    icon: "doctrine",
    name: "Doctrine",
  },
];

// CrossProjectSkills :: () -> React.Component
const CrossProjectSkills = () =>
  <section className="cross-project-skills">
    <AsideTitle title="Cross project skills" icon="b" />

    <div className="skills">
      {cpSkills.map((skill, idx) =>
        <p className="skill" key={`cskill-${idx}`}>
          {(skill.icon && !["doctrine", "circle"].includes(skill.icon)) &&
            <span className="im">{skill.icon}</span>
          }
          {skill.icon === "doctrine" &&
            <img src={doctrine} alt=""/>
          }
          {skill.icon === "circle" &&
            <img src={circle} alt=""/>
          }
          {skill.name}
        </p>
      )}
    </div>
  </section>
;

export default CrossProjectSkills;
