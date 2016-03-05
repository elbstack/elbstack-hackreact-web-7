if (!global.Intl) {
  global.Intl = require('intl')
}

/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/lib/createBrowserHistory'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createStore from './redux/create'
import ApiClient from './helpers/ApiClient'
import {Provider} from 'react-redux'
import {reduxReactRouter, ReduxRouter} from 'redux-router'
import sendbird from 'sendbird'
import { CHAT_MESSAGES } from 'redux/actionTypes'


import getRoutes from './routes'
import makeRouteHooksSafe from './helpers/makeRouteHooksSafe'

const client = new ApiClient()

// Three different types of scroll behavior available.
// Documented here: https://github.com/rackt/scroll-behavior
const scrollableHistory = useScroll(createHistory)

const dest = document.getElementById('content')

const initialState = window.__data

const store = createStore(reduxReactRouter, makeRouteHooksSafe(getRoutes), scrollableHistory, client, initialState)

sendbird.events.onMessageReceived = function eventLog(obj) {
  store.dispatch({
    type: CHAT_MESSAGES,
    payload: obj
  })
}

const component = (
  <ReduxRouter routes={getRoutes(store)} />
)

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
)

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.')
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./dev_tools/DevTools')
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    dest
  )
}
