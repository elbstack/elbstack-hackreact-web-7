import React from 'react'
import styles from './Profile.scss'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'

@connect(
  state => ({
    userName: state.sendbird.user_name
  })
)
export default class Profile extends React.Component {

  render() {
    const { userName } = this.props
    return (
      <nav className="text-center">
        <div className={styles.userContainer}>
          <span className={styles.user}>
            {userName}
            <IndexLink to="/" className={styles.signout}/>
          </span>
        </div>
      </nav>
    )
  }
}
