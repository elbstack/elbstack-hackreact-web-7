import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import sendbird from './sendbird'
import language from './language'
import channels from './channels'
import joined from './joined'
import chat from './chat'

export default combineReducers({
  router,
  sendbird,
  channels,
  language,
  joined,
  chat
})
