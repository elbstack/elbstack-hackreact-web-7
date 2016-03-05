import React, { Component } from 'react'
import styles from './JoinedChannelList.scss'
import { connect } from 'react-redux'
import { joinChat } from '../../redux/actions/chat'

@connect(
  state => ({
    joined: state.joined,
    channels: state.channels.list
  }),
  dispatch => ({
    joinChat: (url) => dispatch(joinChat(url))
  })
)
export default class JoinedChannelList extends Component {

  render() {
    const {joined, channels} = this.props

    let content = (joined.length) ? null : <span>no joined channels</span>

    if (joined.length) {
      content = joined.map((channel) => {
        console.log(channels[channel])
        return <div key={channel} onClick={this.props.joinChat.bind(this, channels[channel].channel_url)}>{channels[channel].name}</div>
      })
    }

    return (
      <div className={styles.container}>
        {content}
      </div>
    )
  }
}
