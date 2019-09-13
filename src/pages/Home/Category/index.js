import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getData } from '@/reducers/category'
import styles from './index.scss'

function Category({ category, getData: getDataAction }) {
  useEffect(() => {
    getDataAction()
  }, [])

  return (
    <div className={styles.root}>
      {
        category.map((item) => (
          <div key={item.name} className={styles.category}>
            <img src={item.icon} alt="icon"/>
            <span>{item.name}</span>
          </div>
        ))
      }
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  category: store.category
})

const mapDispatchToProps = { getData }

export default connect(mapStateToProps, mapDispatchToProps)(Category)
