import { Locale, useTrans } from "../../hooks/useTrans";
import AsideTitle from "../AsideTitle";
import "./references.scss";
import { translations } from './translations'

type Ref = {
  fullName: string
  position: string
  phone?: string
  email: string
}

const getRefs = (locale: Locale): Ref[] => {
  if (locale === 'en') return [
    {
      fullName: "Liran Roth",
      position: "PO, Project Manager, i24NEWS",
      email: "l.roth@i24news.tv",
    },
    {
      fullName: "Alessandro Pozzi",
      position: "Lead developer, KNP Labs",
      phone: "+33 6 65 35 64 27",
      email: "alessandro.pozzi@knplabs.com",
    },
  ]

  return [
    {
      fullName: "Liran Roth",
      position: "PO, Chef de projets, i24NEWS",
      email: "l.roth@i24news.tv",
    },
    {
      fullName: "Alessandro Pozzi",
      position: "Développeur lead, KNP Labs",
      phone: "+33 6 65 35 64 27",
      email: "alessandro.pozzi@knplabs.com",
    },
  ]
}

const References = () => {
  const refs = getRefs(import.meta.env.VITE_LOCALE)
  const trans = useTrans(translations)

  return <section className="references">
    <AsideTitle title={trans("title")} />

    <ul>
      {refs.map((contact, idx) =>
        <li key={`ref-${idx}`}>
          <p>
            <b>{contact.fullName}</b><br/>
            {contact.position}<br/>
            {contact.phone &&
              <>
                <a href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
                <br/>
              </>
            }
            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <br/>
          </p>
        </li>
      )}
    </ul>
  </section>
}
;

export default References;
