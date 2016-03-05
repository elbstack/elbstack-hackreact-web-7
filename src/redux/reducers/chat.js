import { CHAT_MESSAGES, CHAT_CONNECTED } from '../actionTypes'

export default function chat(state = {messages: []}, action) {
  switch (action.type) {
    case CHAT_CONNECTED:
      const channelId = action.payload.channel_id
      return {...state, channelId}
    case CHAT_MESSAGES:
      const messages = [...state.messages, ...action.payload.messages.map((message)=>{
        return {
          message: message.payload.message,
          name: message.payload.user.name
        }
      })]
      return Object.assign({}, state, {messages})
    default:
      return state
  }
}
