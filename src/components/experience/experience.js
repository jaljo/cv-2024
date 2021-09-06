import React from "react";
import AsideTitle from "../aside-title";
import "./experience.scss";
import experiences from "./experiences";

// SubList :: Props -> React.Component
const SubList = ({
  list = [],
  label = "",
}) => list.length > 0 &&
  <div className={`${label.toLowerCase()} sublist wrapper`}>
    <p className="label">{label}</p>
    <p>
      {list.join(", ")}
    </p>
  </div>
;

// Experience :: () -> React.Component
const Experience = () =>
  <section className="experience">
    <AsideTitle title="Work experience" icon="d" />

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
                {exp.responsabilities.map((resp, idx) =>
                  <li key={`resp-${idx}`}>
                    {resp}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {exp.mergeEnvAndTechs
            ? <SubList
                list={[...exp.techs, ...exp.environment]}
                label="Techs & env"
              />
            : <>
                <SubList
                  list={exp.environment}
                  label="Environment"
                />
                <SubList
                  list={exp.techs}
                  label="Technologies"
                />
              </>
          }
          <SubList
            list={exp.publications}
            label="Publications"
          />
        </li>
      )}
    </ul>
  </section>
;

export default Experience;
