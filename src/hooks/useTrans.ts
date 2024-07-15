export type Locale = 'fr' | 'en'
export type Dictionary = Record<Locale, Record<string, string>>
export const useTrans = (dictionary: Dictionary) => (key: string) => {
  return dictionary['fr'][key]
}
