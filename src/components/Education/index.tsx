import { Locale, useTrans } from "../../hooks/useTrans";
import AsideTitle from "../AsideTitle";
import "./education.scss";
import { translations } from "./translations";

type Degree = { title: string, school: string }
const getDegrees = (locale: Locale): Degree[] => {
  if (locale === 'en') return [
    {
      title: "Engineer's degree, Computer Science",
      school: "In progress, EiCNAM, Paris, FR.",
    },
    {
      title: "Certificate of specialization on European Union",
      school: "2020, EiCNAM, Paris, FR.",
    },
    {
      title: "Bachelor's degree, Computer Science",
      school: "(4 years, 240 ECTS), 2014, IMIE, Nantes, FR.",
    },
  ]

  return [
    {
      title: "Diplôme d'ingénieur en informatique",
      school: "En cours, EiCNAM, Paris.",
    },
    {
      title: "Certificat de spécialisation Union Européenne",
      school: "2020, EiCNAM, Paris.",
    },
    {
      title: "Concepteur développeur informatique",
      school: "RNCP Niv. 6 (240 ECTS), 2014, IMIE, Nantes.",
    },
  ]
}

const Education = () => {
  const degs = getDegrees(import.meta.env.VITE_LOCALE)
  const trans = useTrans(translations)

  return <section className="continuing-education">
    <AsideTitle title={trans("title")} icon="q" />

    <ul>
      {degs.map((deg, idx) =>
        <li key={`deg-${idx}`}>
          <b>{deg.title}</b>, {deg.school}
        </li>
      )}
    </ul>
  </section>
}

export default Education;
