import AsideTitle from "../AsideTitle";
import "./cross-project-skills.scss";
import circle from "./../../assets/images/circleci-logo.svg";
import doctrine from "./../../assets/images/doctrine-logo.svg";
import { useTrans } from "../../hooks/useTrans";
import { translations } from "./translations";

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

const CrossProjectSkills = () => {
  const trans = useTrans(translations)
  return <section className="cross-project-skills">
    <AsideTitle title={trans("title")} icon="b" />

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
}

export default CrossProjectSkills;
