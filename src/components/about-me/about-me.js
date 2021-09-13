import React from "react";
import AsideTitle from "../aside-title";
import "./about-me.scss";

// AboutMe :: Props -> () -> React.Component
const AboutMe = ({ trans }) => () =>
  <>
    <section className="about-me">
      <AsideTitle title={trans("title")} />
      <p>
        <a className="phone" href="phone:+33682245284">
          +33 6 82 24 52 84
        </a><br/>
        <a href="mailto:joris.langlois@gmail.com">
          joris.langlois@gmail.com
        </a><br/>
      </p>
      <p className="social-networks">
        <span className="im">g</span>
        <a href="https://github.com/jaljo">
          github.com/jaljo
        </a><br/>
        <span className="im">i</span>
        <a href={`https://www.linkedin.com/in/${trans("linkedin")}`}>
          {trans("linkedin")}
        </a>
      </p>

      <ul>
        {trans("languages").map((lang, idx) =>
          <li key={`lang-${idx}`}>• {lang}</li>
        )}
      </ul>
    </section>
  </>
;

export default AboutMe;
