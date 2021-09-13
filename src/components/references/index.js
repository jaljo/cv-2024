import References from "./references";
import translate from "./../../translate";
import translations from "./translations";

export default References({
  trans: translate(translations, process.env.REACT_APP_LOCALE),
});
