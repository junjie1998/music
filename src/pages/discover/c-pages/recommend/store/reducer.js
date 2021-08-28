import { Map } from 'immutable'

import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_LIST,
  CHANGE_NEW_LIST,
  CHANGE_ORIGIN_LIST
} from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upList: [],
  newList: [],
  originList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums)
    case CHANGE_UP_LIST:
      return state.set('upList', action.upList)
    case CHANGE_NEW_LIST:
      return state.set('newList', action.newList)
    case CHANGE_ORIGIN_LIST:
      return state.set('originList', action.originList)
    default:
      return state
  }
}

export default reducer
