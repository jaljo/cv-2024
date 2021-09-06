import React from "react";
import AsideTitle from "./../aside-title";
import "./publications.scss";

const Publications = () =>
  <section className="publications">
    <AsideTitle title="Main publications" icon="e" />

    <ul>
      <li>
        Langlois, J. (2021, September).&nbsp;
        <i>Avoiding the mud by using observables</i>. KNP Labs Blog.&nbsp;
        <a href="https://knplabs.com/en/blog/avoiding-the-mud-by-using-observables">
          knplabs.com/fr/blog/avoiding-the-mud-by-using-observables
        </a>
      </li>
      <li>
        Langlois, J., Mure, N. (2019, February, 5).&nbsp;
        <i>How we build a medium-like rich text editor</i>. KNP Labs Blog.&nbsp;
        <a href="https://knplabs.com/en/blog/how-we-built-a-medium-like-rich-text-editor">
          knplabs.com/fr/blog/how-we-built-a-medium-like-rich-text-editor
        </a>
      </li>
    </ul>
  </section>
;

export default Publications;
