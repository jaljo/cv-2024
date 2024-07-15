import { Locale, useTrans } from "../../hooks/useTrans";
import AsideTitle from "../AsideTitle";
import "./publications.scss";
import { translations } from "./translations";

type Publication = {
  authors: string
  date: string
  title: string
  editor: string
  link?: string
}

const getPubs = (locale: Locale): Publication[] => {
  if (locale === "en") return [
    {
      authors: "Langlois, J.",
      date: "2021, September",
      title: `Observables by example, an approach to handle third party SDK’s
      custom event systems in frontend projects.`,
      editor: "KNP Labs.",
      link: "https://knplabs.com/en/blog/an-approach-to-handle-third-party-sdk-s-custom-event-systems-in-front-end-projects/",
    },
    {
      authors: "Langlois, J., Mure, N.",
      date: "2019, February, 5",
      title: "How we build a medium-like rich text editor.",
      editor: "KNP Labs.",
      link: "knplabs.com/fr/blog/how-we-built-a-medium-like-rich-text-editor",
    },
  ]

  return [
    {
      authors: "Joris Langlois",
      date: "septembre 2021",
      title: `« Observables by example, an approach to handle third party SDK’s
      custom event systems in frontend projects »`,
      editor: "KNP Labs",
    },
    {
      authors: "Joris Langlois",
      date: "27 avril 2020",
      title: "« Sur l'apprentissage »",
      editor: "KNP Labs",
      link: "knplabs.com/fr/blog/sur-lapprentissage-knplabs",
    },
  ]
}

const Publications = () => {
  const locale = import.meta.env.VITE_LOCALE
  const pubs = getPubs(locale)
  const trans = useTrans(translations)

  return <section className="publications">
    <AsideTitle title={trans("title")} icon="e" />

    <ul>
      {pubs.map((pub, idx) =>
        <li key={`pub-${idx}`}>
          {locale === "en" &&
            <>
              {pub.authors} ({pub.date}).&nbsp;
              <i>{pub.title}</i> {pub.editor}&nbsp;
              {pub.link !== null &&
                <a href={`https://${pub.link}`}>
                  {pub.link}
                </a>
              }
            </>
          }
          {locale === "fr" &&
            <>
              {pub.authors},&nbsp;
              {pub.title}, <i>{pub.editor}</i>,&nbsp;
              {pub.date}
              {pub.link !== null &&
                <>
                  , <a href={`https://${pub.link}`}>
                      {pub.link}
                    </a>
                </>
              }
            </>
          }
        </li>
      )}
    </ul>
  </section>
}

export default Publications;
