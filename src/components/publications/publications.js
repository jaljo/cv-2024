import React from "react";
import AsideTitle from "./../aside-title";
import "./publications.scss";

// Publications :: Props -> () -> React.Component
const Publications = ({ trans, locale }) => () =>
  <section className="publications">
    <AsideTitle title={trans("title")} icon="e" />

    <ul>
      {trans("pubs").map((pub, idx) =>
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
;

export default Publications;
