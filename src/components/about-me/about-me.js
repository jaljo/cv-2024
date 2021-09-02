import React from "react";
import AsideTitle from "../aside-title";
import "./about-me.scss";

// AboutMe :: () -> React.Component
const AboutMe = () =>
  <>
    <section className="about-me">
      <AsideTitle title="About me" />
      <p>
        <span className="phone">+33 6 82 24 52 84</span><br/>
        joris.langlois@gmail.com<br/>
        In Tallinn since Oct. 2020
      </p>
      <p className="links">
        <span className="im">g</span>
        github.com/jaljo<br/>
        <span className="im">i</span>
        joris-langlois-42217252
      </p>
    </section>

    <section className="languages">
      <AsideTitle title="Languages" />
      <ul>
        <li>English B2</li>
        <li>Estonian A1 (it's something o/)</li>
      </ul>
    </section>
  </>

export default AboutMe;
