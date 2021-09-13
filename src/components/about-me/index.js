import AboutMe from "./about-me";
import translations from "./translations";
import trans from "./../../translate";

export default AboutMe({
  trans: trans(translations, process.env.REACT_APP_LOCALE),
});
