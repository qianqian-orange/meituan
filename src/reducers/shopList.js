import axios from 'axios'

const INIT_SHOPLIST_DATA = 'INIT_SHOPLIST_DATA'

export default (state = [], action) => {
  switch (action.type) {
    case INIT_SHOPLIST_DATA:
      return [...action.payload]
    default:
      return state
  }
}

export function getData() {
  return (dispatch) => {
    axios.get('/public/json/shopList.json')
      .then((res) => {
        dispatch({
          type: INIT_SHOPLIST_DATA,
          payload: res.data
        })
      })
  }
}
