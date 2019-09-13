import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './index.scss'
import Condition from './Condition'
import { getData } from '@/reducers/shopList'

function ShopList({ shopList, getData: getDataAction }) {
  useEffect(() => {
    getDataAction()
    function lazyLoad() {
      const { scrollTop, clientHeight } = document.documentElement
      const { scrollHeight } = document.body
      if (scrollTop + clientHeight >= scrollHeight) {
        // console.log('loading')
      }
    }
    window.addEventListener('scroll', lazyLoad)
    return () => {
      window.removeEventListener('scroll', lazyLoad)
    }
  }, [])

  function computedWidth(source) {
    return (source / 50) * 100
  }

  return (
    <>
      <p className={styles.title}>附近商家</p>
      <Condition/>
      <ul>
        {
          shopList.map((shop) => (
            <li className={styles.item} key={shop.mtWmPoiId}>
              <img src={shop.picUrl} alt="icon"/>
              <div className={styles.content}>
                <p className={styles.shopName}>{shop.shopName}</p>
                <p>
                  <span style={{ display: 'flex' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                    >
                      <i className={styles.greyStar}/>
                      <i className={styles.greyStar}/>
                      <i className={styles.greyStar}/>
                      <i className={styles.greyStar}/>
                      <i className={styles.greyStar}/>
                      <span
                        style={{ width: `${computedWidth(shop.wmPoiScore)}%` }}
                        className={styles.activeStarContainer}
                      >
                        <i className={styles.activeStar}/>
                        <i className={styles.activeStar}/>
                        <i className={styles.activeStar}/>
                        <i className={styles.activeStar}/>
                        <i className={styles.activeStar}/>
                      </span>
                    </span>
                    <span className={styles.source}>{shop.wmPoiScore / 10}</span>
                    <span className={styles.sell}>月售xxx</span>
                  </span>
                  <span>
                    xxx&nbsp;分钟&nbsp;|&nbsp;xxx&nbsp;km
                  </span>
                </p>
                <p>起送&nbsp;xxx&nbsp;|&nbsp;配送&nbsp;xxx&nbsp;|&nbsp;人均&nbsp;xxx</p>
                {
                  shop.discounts2 && shop.discounts2.map((discount) => (
                    <p className={styles.activity} key={discount.activityId}>
                      <img src={discount.iconUrl} alt="icon"/>
                      xxx
                    </p>
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

ShopList.propTypes = {
  shopList: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  shopList: store.shopList
})

const mapDispatchToProps = { getData }

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)
