import React, { Component } from 'react'
import styles from './IntroText.scss'

export default class IntroText extends Component {

  render() {
    return (
      <div className={styles.intro}>
        <span className={styles.heading}>Messenger</span>
        <p>
          Exercises:
        </p>
        <ol>
          <li>Add the team logo</li>
          <li>Display the username</li>
          <li>Toggle and display the channel list</li>
          <li>Join a channel by clicking on it</li>
          <li>Open and show a messenger-channel</li>
          <li>Send and display messages</li>
        </ol>
        <p>
          Some resources:
        </p>
        <ul>
          <li><a href="http://facebook.github.io/react/docs/getting-started.html">react docs (getting started)</a></li>
          <li><a href="https://sendbird.gitbooks.io/sendbird-web-sdk/content/en/">sendbird web gitbook</a></li>
        </ul>
      </div>
    )
  }
}
