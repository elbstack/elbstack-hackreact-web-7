import React, { Component } from 'react'
import styles from './ListChannelsBtn.scss'

export default class ListChannelsBtn extends Component {

  onListChannels() {
    this.props.onClick()
  }

  render() {
    return (
      <div onClick={this.onListChannels.bind(this)} className={styles.button}>
        list channels
        <span className={styles.icon} />
      </div>
    )
  }
}
