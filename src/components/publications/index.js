import Publications from "./publications";
import translations from "./translations";
import translate from "./../../translate";

export default Publications({
  locale: process.env.REACT_APP_LOCALE,
  trans: translate(translations, process.env.REACT_APP_LOCALE),
});
