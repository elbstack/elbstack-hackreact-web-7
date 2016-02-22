import { CHANGE_LANGUAGE, SET_COUNTRY_CODE } from '../actionTypes'
import i18n from '../../utils/i18n'

const defaultLocale = 'de'

export function changeLanguage(locale) {

  let localeId = defaultLocale

  switch (locale) {
    case 'en':
      localeId = 'en'
      break
    default:
      localeId = defaultLocale
  }

  i18n.setLanguage(localeId)

  return {
    type: CHANGE_LANGUAGE,
    messages: i18n.messages
  }
}

export function setCountryCode(countryCode) {
  return {
    type: SET_COUNTRY_CODE,
    countryCode
  }
}
