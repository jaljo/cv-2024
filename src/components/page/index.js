import Page from "./page";
import translations from "./translations";
import translate from "./../../translate";

export default Page({
  trans: translate(translations, process.env.REACT_APP_LOCALE),
});
