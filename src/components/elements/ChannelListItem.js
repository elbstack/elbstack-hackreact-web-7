import React, { Component } from 'react'

export default class ChannelListItem extends Component {

  render() {
    return (
      <div onClick={this.props.joining}>{this.props.name}</div>
    )
  }
}
