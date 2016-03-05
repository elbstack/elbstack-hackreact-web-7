import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({
    chat: state.chat
  })
)
export default class Chat extends Component {

  render() {
    const {chat} = this.props
    return (
      <div>{chat.channelId} {chat.messages.map((message)=>{
        return <div>{message.name}: {message.message}</div>
      })}</div>
    )
  }
}
