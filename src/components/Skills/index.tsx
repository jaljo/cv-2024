import { Locale, useTrans } from "../../hooks/useTrans";
import AsideTitle from "../AsideTitle";
import rxjs from "./../../assets/images/rxjs.svg";
import "./skills.scss";
import { translations } from "./translations";

const getSkills = (locale: Locale) => {
  if (locale === 'en') return [
    `Enjoys collaboration on projects by writing architecture decision
    records and code reviews; addicted to git flow.`,
    `Loves to listen, challenge decisions & find compromises.`,
    `Initiative spirit, force of proposal & constant learning.`,
    `Aims at method and testability over rapid app development.`,
  ]

  return [
    `Enthousiaste pour collaborer sur des projects (code reviews, architecture
    decision record, etc); accro au git flow.`,
    `Écoute, challenge les décisions et fait émerger un compromis.`,
    `Force d'initiative, propositions et en constant apprentissage.`,
    `Recherche la méthode et la testabilité plûtot que la rapidité.`,
  ]
}

const Skills = () => {
  const skills = getSkills(import.meta.env.VITE_LOCALE)

  const trans = useTrans(translations)
  return <>
    <section className="teamwork">
      <AsideTitle title={trans("teamworkTitle")} />

      <ul>
        {skills.map((skill, idx) =>
          <li key={`sk-${idx}`}>• {skill}</li>
        )}
      </ul>
    </section>

    <section className="skills">
      <AsideTitle title={trans("skillsTitle")} />

      <div className="row">
        <p>
          <span className="im">r</span>
          <span>React</span>
        </p>
        <p>
          <span className="im">x</span>
          <span>Redux</span>
        </p>
        <p>
          <img src={rxjs} alt="rx" />
          <span>RxJS</span>
        </p>
      </div>
      <div className="row">
        <p>
          <span className="im">t</span>
          <span>Jest</span>
        </p>
        <p>
          <span className="im">s</span>
          <span>Symfony</span>
        </p>
      </div>
    </section>
  </>
}

export default Skills;
