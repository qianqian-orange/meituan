import React from 'react'
import styles from './index.scss'

const imgs = [
  'http://p0.meituan.net/waimaipoi/92f10842a285b9946758ff86321b0d0925401.jpg',
  'http://p1.meituan.net/waimaipoi/6b25db56367f059aca26e0c72dbb4043241338.jpg',
  'http://p0.meituan.net/waimaipoi/0c5590ee9da6e0941f7ad8f4c8e87048205016.jpg',
  'http://p1.meituan.net/waimaipoi/9f68889806f2954ba901d8100e23bfba119348.jpg'
]

function Order() {
  return (
    <>
      <div className={styles.title}>我的订单</div>
      <div className={styles.root}>
        <ul style={{ overflow: 'hidden' }}>
          {
            imgs.map((img) => (
              <li className={styles.item} key={img}>
                <div className={styles.content}>
                  <img src={img} alt="icon"/>
                  <div style={{ flex: 1 }}>
                    <p>
                      <span style={{ position: 'relative' }}>
                        <span className={styles.shopName}>咸骨粥爽滑饺子王（惠大店）</span>
                        <span className={styles.arrow}/>
                      </span>
                      <span className={styles.status}>订单已送达</span>
                    </p>
                    <p className={styles.time}>2019-09-10 10:10:10</p>
                    <p className={styles.desc}>
                      <span style={{ color: '#333', fontSize: '0.28rem' }}>xxx商品</span>
                      <span style={{ fontWeight: 600, fontSize: '0.28rem' }}>￥xxx</span>
                    </p>
                  </div>
                </div>
                <div style={{ paddingRight: '0.4rem', overflow: 'hidden' }}>
                  <div className={styles.btn}>再来一单</div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Order
