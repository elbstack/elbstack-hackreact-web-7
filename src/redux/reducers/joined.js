import { JOINED_CHANNEL } from '../actionTypes'

export default function joined(state = [], action) {
  switch (action.type) {
    case JOINED_CHANNEL:
      if (state.indexOf(action.id) !== -1) {
        return state
      }
      return [...state, action.id]
    default:
      return state
  }
}
