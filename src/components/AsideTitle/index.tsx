import "./aside-title.scss";

const AsideTitle: React.FC<{
  title: string,
  icon?: string,
}> = ({
  title,
  icon,
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
