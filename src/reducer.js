import { combineReducers } from 'redux'
import category from './reducers/category'
import shopList from './reducers/shopList'

export default combineReducers({
  category,
  shopList
})
