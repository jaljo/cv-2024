import React from "react";
import AsideTitle from "../aside-title";
import "./experience.scss";
import experiences from "./experiences";

// Experience :: () -> React.Component
const Experience = () =>
  <section className="experience">
    <AsideTitle title="Work experience - 7+ years" icon="d" />

    <ul>
      {experiences.map((exp, idx) =>
        <li className="parent" key={`exp-${idx}`}>
          <div className="wrapper">
            <p className="date">
              {exp.date}
            </p>
            <div>
              <p className="position">
                <b>{exp.position}</b>, {exp.company}
              </p>
              <ul className="responsabilities">
                {exp.responsibilities.map((resp, idx) =>
                  <li key={`resp-${idx}`}>
                    {resp}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="wrapper stack">
            <p>Stack:</p>
            <p>
              {exp.techs.join(", ")}
            </p>
          </div>
        </li>
      )}
    </ul>
  </section>
;

export default Experience;
