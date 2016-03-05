import React, { Component } from 'react'
import styles from './JoinedChannelList.scss'
import { connect } from 'react-redux'

@connect(
  state => ({
    joined: state.joined,
    channels: state.channels.list
  })
)
export default class JoinedChannelList extends Component {

  render() {
    const {joined, channels} = this.props

    let content = (joined.length) ? null : <span>no joined channels</span>

    if (joined.length) {
      content = joined.map((channel) =>{
        return <div key={channel}>{channels[channel].name}</div>
      })
    }

    return (
      <div className={styles.container}>
        {content}
      </div>
    )
  }
}
