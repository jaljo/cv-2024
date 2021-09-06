import "./page.scss";
import javel from "./../../assets/images/javel.jpg";
import References from "./../references"
import AboutMe from "./../about-me";
import Education from "./../education";
import Experience from "./../experience";
import Skills from "./../skills";

// Page :: Props -> React.Component
const Page = () =>
  <main className="page">
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
        <h2>Developer. Simply.</h2>
      </section>

      <Experience />
      <Education />
    </aside>
  </main>
;

export default Page;
