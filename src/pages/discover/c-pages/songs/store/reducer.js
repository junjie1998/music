import { Map } from 'immutable'

import { CHANGE_CATEGORY_LIST, CHANGE_CURRENT_CATEGORY } from './constants'

const defaultState = Map({
  categoryList: [],
  currentCategory: '全部'
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_LIST:
      return state.set('categoryList', action.categoryList)
    case CHANGE_CURRENT_CATEGORY:
      return state.set('currentCategory', action.currentCategory)
    default:
      return state
  }
}

export default reducer
