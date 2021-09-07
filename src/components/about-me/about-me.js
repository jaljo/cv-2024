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
      </p>
      <p className="links">
        <span className="im">g</span>
        github.com/jaljo<br/>
        <span className="im">i</span>
        joris-langlois-42217252
      </p>

      <ul>
        <li>• French native</li>
        <li>• English B2</li>
        <li>• Estonian A1 (it's something!)</li>
      </ul>
    </section>
  </>
;

export default AboutMe;
