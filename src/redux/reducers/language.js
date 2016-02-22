import { CHANGE_LANGUAGE, SET_COUNTRY_CODE } from '../actionTypes'

const initial = {
  countryCode: 'de'
}

export default function language(state = initial, action) {

  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign(
        {},
        state,
        { messages: action.messages }
      )
    case SET_COUNTRY_CODE:
      return Object.assign(
        {},
        state,
        { countryCode: action.countryCode }
      )
    default:
      return state
  }
}
