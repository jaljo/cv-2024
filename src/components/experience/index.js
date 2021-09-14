import Experience from "./experience";
import translations from "./translations";
import translate from "./../../translate";

export default Experience({
  trans: translate(translations, process.env.REACT_APP_LOCALE),
});
