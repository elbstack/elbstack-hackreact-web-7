import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import ChannelListItem from '../elements/ChannelListItem'
import { listChannels } from '../../redux/actions/channels'
import { joinedChannel } from '../../redux/actions/joined'

@connect(
  state => ({
    channels: state.channels
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels()),
    joinedChannel: (id) => dispatch(joinedChannel(id))
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  joining(id) {
    console.log(id)
    this.props.joinedChannel(id)
  }

  render() {
    const { channels } = this.props
    let content = null
    let listItems = []

    if (channels && channels.list) {
      listItems = Object.keys(channels.list).map((item)=> {
        return Object.assign(channels.list[item], {key: item})
      })

      content = (<div>{listItems.map((item)=> {
        return <ChannelListItem className={styles.item} joining={this.joining.bind(this, item.id)} {...item}/>
      })}</div>)

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
