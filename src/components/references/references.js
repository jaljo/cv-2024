import React from "react";
import "./references.scss";
import AsideTitle from "./../aside-title";

// References :: Props -> () -> React.Component
const References = ({ trans }) => () =>
  <section className="references">
    <AsideTitle title={trans("title")} />

    <ul>
      {trans("refs").map((contact, idx) =>
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
;

export default References;
