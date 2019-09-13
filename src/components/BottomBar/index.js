import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './index.scss'
import home from './img/head.png'
import homeActive from './img/head-active.png'
import order from './img/order.png'
import orderActive from './img/order-active.png'
import me from './img/me.png'
import meActive from './img/me-active.png'

const tabs = [
  {
    name: 'home',
    text: '首页',
    icon: home,
    activeIcon: homeActive,
    path: '/home'
  },
  {
    name: 'order',
    text: '订单',
    icon: order,
    activeIcon: orderActive,
    path: '/order'
  },
  {
    name: 'me',
    text: '我的',
    icon: me,
    activeIcon: meActive,
    path: '/me'
  }
]

function BottomBar({ location }) {
  const match = location.pathname.match(/\/(\w+)/)
  const name = match ? match[1] : 'home'

  return (
    <div className={styles.root}>
      {
        tabs.map((tab) => (
          <Link
            to={tab.path}
            key={tab.name}
            className={styles.tab}
          >
            <div
              className={styles.icon}
              style={{ backgroundImage: `url(${name === tab.name ? tab.activeIcon : tab.icon})` }}
            />
            <span style={{ color: name === tab.name ? '#333' : '#ccc' }}>{tab.text}</span>
          </Link>
        ))
      }
    </div>
  )
}

BottomBar.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(BottomBar)
