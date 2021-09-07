import React from "react";
import AsideTitle from "./../aside-title";
import "./publications.scss";

const Publications = () =>
  <section className="publications">
    <AsideTitle title="Main publications" icon="e" />

    <ul>
      <li>
        Langlois, J. (2021, September).&nbsp;
        <i>Observables by example, an approach to handle third party SDK’s custom
          event systems in front end projects</i>. KNP Labs.
      </li>
      <li>
        Langlois, J., Mure, N. (2019, February, 5).&nbsp;
        <i>How we build a medium-like rich text editor</i>. KNP Labs.&nbsp;
        <a href="https://knplabs.com/en/blog/how-we-built-a-medium-like-rich-text-editor">
          knplabs.com/fr/blog/how-we-built-a-medium-like-rich-text-editor
        </a>
      </li>
    </ul>
  </section>
;

export default Publications;
