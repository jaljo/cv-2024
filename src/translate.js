// translate :: (Object, String) -> String -> String
const translate = (dictionary = {}, locale = "en") => (key = "") =>
  dictionary[locale][key]
;

export default translate;
