import React from "react";
import AsideTitle from "./../aside-title";
import rxjs from "./../../assets/images/rxjs.svg";
import "./skills.scss";

// Skills :: () -> React.Component
const Skills = () =>
  <section className="skills">
    <AsideTitle title="Main skills" />
    <ul>
      <li>
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
        <p>
          <span className="im">s</span>
          <span>Symfony</span>
        </p>
      </li>
    </ul>
  </section>

export default Skills;
