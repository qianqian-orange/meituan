import axios from 'axios'

const INIT_CATEGORY_DATA = 'INIT_CATEGORY_DATA'

export default (state = [], action) => {
  switch (action.type) {
    case INIT_CATEGORY_DATA:
      return [...action.payload]
    default:
      return state
  }
}

export function getData() {
  return (dispatch) => {
    axios.get('/public/json/category.json')
      .then((res) => {
        dispatch({
          type: INIT_CATEGORY_DATA,
          payload: res.data
        })
      })
  }
}
