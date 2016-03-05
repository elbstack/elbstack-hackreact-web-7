import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamLogo from '../elements/TeamLogo'
import Profile from '../elements/Profile'
import ListChannelsBtn from '../elements/ListChannelsBtn'
import ChannelList from '../containers/ChannelList'
import JoinedChannelList from '../elements/JoinedChannelList'
import IntroText from '../elements/IntroText'
import Chat from '../containers/chat'
import styles from './Messenger.scss'

@connect(
  state => ({
    sendbird: state.sendbird,
    chat: state.chat
  })
)
export default class Messenger extends Component {
  state = {
    toggleChannelList: false
  };

  toggleChannelList() {
    const toggleChannelList = !this.state.toggleChannelList
    this.setState({toggleChannelList})
  }

  render() {
    const { toggleChannelList } = this.state
    const { chat } = this.props
    const channelList = toggleChannelList ? <ChannelList /> : null

    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <TeamLogo />
          <Profile />
          <ListChannelsBtn onClick={this.toggleChannelList.bind(this)}/>
          <JoinedChannelList />
        </div>
        <div className={styles.chat}>
          {channelList}
          {(chat.channelId) ? <Chat/> : <IntroText />}
        </div>
      </div>
    )
  }
}
