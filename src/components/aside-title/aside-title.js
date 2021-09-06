import React from "react";
import "./aside-title.scss";

// AsideTitle :: Props -> React.Component
const AsideTitle = ({
  title = "",
  icon = null,
}) =>
  <div className="aside-title">
    {icon &&
      <span className="im">{icon}</span>
    }
    <h3>
      {title}
      <span className="separator"/>
    </h3>
  </div>
;

export default AsideTitle;
