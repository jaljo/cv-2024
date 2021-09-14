import Skills from "./skills";
import translate from "./../../translate";
import translations from "./translations";

export default Skills({
 trans: translate(translations, process.env.REACT_APP_LOCALE),
});
