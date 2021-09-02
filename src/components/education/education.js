import React from "react";
import AsideTitle from "./../aside-title";
import "./education.scss";

// Education :: () -> React.Component
const Education = () =>
  <>
    <section className="continuing-education">
      <AsideTitle title="Continuing education" icon="w" />
      <ul>
        <li>
          <b>Engineer's degree in Computer Science</b>, In progress, École
            d'ingénieur du Conservatoire National des Arts et Métiers, Paris, FR.
        </li>
        <li>
          <b>Certificate of specialization on European Union</b>, 2020, EiCNAM,
          Paris, FR.
        </li>
      </ul>
    </section>
    <section className="education">
      <AsideTitle title="Education" icon="q" />
      <ul>
        <li>
          <b>Bachelor's degree in Computer Science</b> (4 year, 240 ECTS), 2014,
          IMIE, Nantes, FR.
        </li>
      </ul>
    </section>
  </>
;

export default Education;
