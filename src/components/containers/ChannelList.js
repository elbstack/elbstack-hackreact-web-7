import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import { listChannels } from '../../redux/actions/channels'

@connect(
  state => ({
    channels: state.channels
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels())
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  render() {
    const { channels } = this.props
    let content = null
    let listItems = []

    if (channels && channels.list) {
      listItems = Object.keys(channels.list).map((item)=> {
        return channels.list[item]
      })

      content = (<ul>{listItems.map((item)=> {
        return <li>{item.name}</li>
      })}</ul>)

    } else {
      content = <p>Lade Channels</p>
    }

    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {content}
        </div>
      </div>
    )
  }
}
