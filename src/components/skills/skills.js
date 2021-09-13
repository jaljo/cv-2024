import React from "react";
import AsideTitle from "./../aside-title";
import rxjs from "./../../assets/images/rxjs.svg";
import "./skills.scss";

// Skills :: Props -> () -> React.Component
const Skills = ({ trans }) => () =>
  <>
    <section className="teamwork">
      <AsideTitle title={trans("teamworkTitle")} />

      <ul>
        {trans("teamSkills").map((skill, idx) =>
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
;

export default Skills;
