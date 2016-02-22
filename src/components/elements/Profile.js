import React from 'react'
import styles from './Profile.scss'
import { IndexLink } from 'react-router'

export default class Profile extends React.Component {

  render() {
    return (
      <nav className="text-center">
        <div className={styles.userContainer}>
          <span className={styles.user}>
            <IndexLink to="/" className={styles.signout} />
          </span>
        </div>
      </nav>
    )
  }
}
