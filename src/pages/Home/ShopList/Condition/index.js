import React, { useRef, useState, useEffect } from 'react'
import styles from './index.scss'

function Condition() {
  const condition = useRef()
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    function throttle(delay) {
      let flag = false
      return () => {
        if (flag) return
        flag = true
        const timer = setTimeout(() => {
          clearTimeout(timer)
          flag = false
          const { fontSize } = window.getComputedStyle(document.documentElement)
          const scrollTop = 4.12 * parseFloat(fontSize)
          if (document.documentElement.scrollTop < Math.floor(scrollTop)) {
            if (collapsed) {
              setCollapsed(() => false)
            }
          }
        }, delay)
      }
    }
    const handleScroll = throttle(100)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [collapsed])

  useEffect(() => {
    if (!collapsed) {
      condition.current.style.position = 'static'
      condition.current.style.top = 0
    } else {
      condition.current.style.position = 'fixed'
      condition.current.style.top = '1rem'
    }
  }, [collapsed])

  function handleSynthesisClick() {
    const { fontSize } = window.getComputedStyle(document.documentElement)
    const scrollTop = 4.12 * parseFloat(fontSize)
    document.documentElement.scrollTop = scrollTop
    setCollapsed((state) => !state)
  }

  return (
    <div style={{ height: 'calc(0.8rem + 2px)', width: '100%' }}>
      <ul className={styles.root} ref={condition}>
        <li
          className={styles.synthesis}
          onClick={handleSynthesisClick}
          onKeyDown={handleSynthesisClick}
        >
          综合排序
          <div
            className={styles.mask}
            style={{ display: collapsed ? 'block' : 'none' }}
          >
            <ul className={styles.synthesisSelectContainer}>
              <li>综合排序</li>
              <li>速度最快</li>
              <li>评价最高</li>
              <li>起送价最低</li>
              <li>配送费最低</li>
              <li>平均低到高</li>
              <li>平均高到底</li>
            </ul>
          </div>
        </li>
        <li>销量最高</li>
        <li>距离最近</li>
        <li className={styles.filter}>筛选</li>
      </ul>
    </div>
  )
}

export default Condition
