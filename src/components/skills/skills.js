import React from "react";
import AsideTitle from "./../aside-title";
import rxjs from "./../../assets/images/rxjs.svg";
import "./skills.scss";

// Skills :: () -> React.Component
const Skills = () =>
  <>
    <section className="teamwork">
      <AsideTitle title="Teamwork" />

      <ul>
        <li>
          • Enjoy collaboration on projects by writing architecture decision
          records and code reviews. Addicted to git flow.
        </li>
        <li>
          • Love to listen, challenge decisions & find compromises.
        </li>
        <li>
          • Initiative spirit, force of proposal & constant learning.
        </li>
        <li>
         • Aim at method and testability over rapid app development.<br/>
         <b>Quality takes time.</b>
        </li>
      </ul>
    </section>

    <section className="skills">
      <AsideTitle title="Main skills" />

      <div className="columns">
        <div className="left">
          <p>
            <span className="im">r</span>
            <span>React</span>
          </p>
          <p>
            <img src={rxjs} alt="rx" />
            <span>RxJS</span>
          </p>
        </div>
        <div className="right">
          <p>
            <span className="im">x</span>
            <span>Redux</span>
          </p>
          <p>
            <span className="im">s</span>
            <span>Symfony</span>
          </p>
        </div>
      </div>
    </section>
  </>
;

export default Skills;
