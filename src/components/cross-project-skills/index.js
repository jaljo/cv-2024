import CrossProjectSkills from "./cross-project-skills.js";
import trans from "./../../translate";
import translations from "./translations";

export default CrossProjectSkills({
  trans: trans(translations, process.env.REACT_APP_LOCALE),
});
