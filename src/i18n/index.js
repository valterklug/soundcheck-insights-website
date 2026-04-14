import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import es from './es.json'
import pt from './pt.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  })

export default i18n

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
]

export function getLangFromPath(pathname) {
  const match = pathname.match(/^\/(es|pt)(\/|$)/)
  return match ? match[1] : 'en'
}

export function getPathWithoutLang(pathname) {
  return pathname.replace(/^\/(es|pt)(\/|$)/, '/') || '/'
}

export function getLocalizedPath(path, lang) {
  if (lang === 'en') return path
  const clean = path.startsWith('/') ? path : `/${path}`
  return `/${lang}${clean === '/' ? '' : clean}`
}
