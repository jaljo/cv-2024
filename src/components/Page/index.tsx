import "./page.scss";
import javel from "./../../assets/images/javel.jpg";
import translations from './translations'
import { useTrans } from "../../hooks/useTrans";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import References from "../References";
import Experience from "../Experience";
import CrossProjectSkills from "../CrossProjectSkills";
import Education from "../Education";
import Publications from "../Publications";

const Page = () => {
  const trans = useTrans(translations)

  return <main className="page">
    {/* Available now */}
    <p className="available-now">
      {trans("available")}
    </p>

    {/* Left column */}
    <aside className="left-column">
      <section className="photo">
        <img src={javel} alt="jabek" />
      </section>

      <AboutMe />
      <Skills />
      <References />
    </aside>

    {/* Right column (work experience, etc) */}
    <aside className="right-column">
      <section>
        <h1 className="me">
          Joris Langlois
        </h1>
      </section>

      <Experience />
      <CrossProjectSkills />
      <Education />
      <Publications />
    </aside>
  </main>
}

export default Page;
