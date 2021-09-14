import "./page.scss";
import javel from "./../../assets/images/javel.jpg";
import References from "./../references"
import AboutMe from "./../about-me";
import Education from "./../education";
import Experience from "./../experience";
import Skills from "./../skills";
import Publications from "./../publications";
import CrossProjectSkills from "./../cross-project-skills";

// Page :: Props -> React.Component
const Page = ({ trans }) => () =>
  <main className="page">
    {/* Available now */}
    <p className="available-now">
      {trans("available")}
      {trans("address") !== null &&
        <b>{trans("address")}</b>
      }
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
;

export default Page;
