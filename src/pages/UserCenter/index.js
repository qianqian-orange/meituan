import React from 'react'
import styles from './index.scss'
import money from './img/money.png'
import address from './img/address.png'
import problem from './img/problem.png'
import introduction from './img/introduction.png'
import logout from './img/logout.png'

function UserCenter() {
  return (
    <div style={{ minHeight: 'calc(100vh - 1rem)', backgroundColor: '#eee' }}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}/>
        <p style={{
          textAlign: 'center',
          color: '#333',
          paddingTop: '0.1rem',
          fontSize: '0.32rem'
        }}
        >
          zhangsan
        </p>
      </div>
      <div style={{ backgroundColor: '#fff' }}>
        <div className={styles.item}>
          <img src={money} alt="icon"/>
          <span>美团红包</span>
          <span className={styles.arrow}/>
        </div>
        <div className={styles.item}>
          <img src={address} alt="icon"/>
          <span>收货地址</span>
          <span className={styles.arrow}/>
        </div>
        <div className={styles.item}>
          <img src={problem} alt="icon"/>
          <span>常见问题</span>
          <span className={styles.arrow}/>
        </div>
        <div className={styles.item}>
          <img src={introduction} alt="icon"/>
          <span>美团协议与说明</span>
          <span className={styles.arrow}/>
        </div>
        <div className={styles.item}>
          <img src={logout} alt="icon"/>
          <span>退出登录</span>
          <span className={styles.arrow}/>
        </div>
      </div>
      <div className={styles.telephone}>
        客服电话：xxxx
      </div>
      <p style={{
        textAlign: 'center',
        color: '#ccc',
        fontSize: '0.24rem',
        paddingTop: '0.1rem'
      }}
      >
        服务时间：9:00-23:00
      </p>
    </div>
  )
}

export default UserCenter
