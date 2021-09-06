import React from "react";
import "./references.scss";
import contacts from "./contacts";
import AsideTitle from "./../aside-title";

// References :: () -> React.Component
const References = () =>
  <section className="references">
    <AsideTitle title="References" />
    <ul>
      {contacts.map((contact, idx) =>
        <li key={`ref-${idx}`}>
          <p>
            <b>{contact.fullName}</b><br/>
            {contact.position}<br/>
            {contact.phone &&
              <>
              {`${contact.phone}`}<br/>
              </>
            }
             {`${contact.email}`}<br/>
          </p>
        </li>
      )}
    </ul>
  </section>
;

export default References;
