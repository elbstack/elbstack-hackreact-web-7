import React, { Component } from 'react'
import styles from './JoinedChannelList.scss'

export default class JoinedChannelList extends Component {

  render() {

    const content = <span>no joined channels</span>

    return (
      <div className={styles.container}>
        {content}
      </div>
    )
  }
}
