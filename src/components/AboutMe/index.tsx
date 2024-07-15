import { Locale, useTrans } from "../../hooks/useTrans";
import AsideTitle from "../AsideTitle";
import "./about-me.scss";
import { translations } from './translations'

const getLanguages = (locale: Locale) => {
  if (locale === 'en') return [
    "French native",
    "English B2",
    "Estonian A1",
  ]

  return [
    "Anglais B2",
    "Estonien A1",
  ]
}

const AboutMe = () => {
  const langs = getLanguages(import.meta.env.VITE_LOCALE)
  const trans = useTrans(translations)

  return <section className="about-me">
    <AsideTitle title={trans("title") as string} />
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
      {langs.map((lang, idx) =>
        <li key={`lang-${idx}`}>• {lang}</li>
      )}
    </ul>
  </section>
}

export default AboutMe;
