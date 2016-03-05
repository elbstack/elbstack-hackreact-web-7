import { JOINED_CHANNEL } from '../actionTypes'

export function joinedChannel(id) {
  return {
    type: JOINED_CHANNEL,
    id
  }
}
