import React from 'react'
import styles from './index.scss'

function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.location}>
        惠州学院
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="请输入商家或商品名称"/>
      </div>
    </div>
  )
}

export default Header
