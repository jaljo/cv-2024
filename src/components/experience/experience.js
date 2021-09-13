import React from "react";
import AsideTitle from "../aside-title";
import "./experience.scss";

// Experience :: Props -> () -> React.Component
const Experience = ({ trans }) => () =>
  <section className="experience">
    <AsideTitle title={trans("title")} icon="d" />

    <ul>
      {trans("exps").map((exp, idx) =>
        !exp.isHidden &&
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
