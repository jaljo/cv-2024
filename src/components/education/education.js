import React from "react";
import AsideTitle from "./../aside-title";
import "./education.scss";

// Education :: Props -> () -> React.Component
const Education = ({ trans }) => () =>
  <section className="continuing-education">
    <AsideTitle title={trans("title")} icon="q" />

    <ul>
      {trans("degrees").map((deg, idx) =>
        <li key={`deg-${idx}`}>
          <b>{deg.title}</b>, {deg.school}
        </li>
      )}
    </ul>
  </section>
;

export default Education;
