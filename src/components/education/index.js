import Education from "./education";
import translations from "./translations";
import translate from "./../../translate";

export default Education({
  trans: translate(translations, process.env.REACT_APP_LOCALE),
});
