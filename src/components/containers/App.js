import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DocumentMeta from 'react-document-meta'
import { IntlProvider } from 'react-intl'
import config from '../../config'
import styles from './App.scss'
import { connectSendbird } from '../../redux/actions/sendbird'

@connect(
  state => ({
    router: state.router,
    sendbird: state.sendbird,
    language: state.language
  }),
  dispatch => ({
    connectSendbird: (user) => dispatch(connectSendbird(user))
  })
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    language: PropTypes.object
  }

  componentDidMount() {
    if (this.props.router.location.pathname !== '/' && !this.props.sendbird.connected) {

      const username = localStorage.getItem('sendbird.user_name')

      if (username) {
        this.props.connectSendbird(username)

      } else {
        this.props.history.pushState(null, '/')
      }
    }
  }

  render() {
    return (
      <IntlProvider messages={this.props.language.messages}>
        <div className={styles.app}>
          <DocumentMeta {...config.app} />
          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}
