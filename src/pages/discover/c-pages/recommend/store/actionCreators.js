import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_LIST,
  CHANGE_NEW_LIST,
  CHANGE_ORIGIN_LIST
} from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList
} from '@/service/recommend'

const changeTopBannerActions = res => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerActions(res))
    })
  }
}

const changeHotRecommendActions = res => ({
  type: CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

export const getHotRecommendAction = params => {
  return dispatch => {
    getHotRecommends(params).then(res => {
      dispatch(changeHotRecommendActions(res))
    })
  }
}

const changeNewAlbumActions = res => ({
  type: CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

export const getNewAlbumAction = params => {
  return dispatch => {
    getNewAlbum(params).then(res => {
      dispatch(changeNewAlbumActions(res))
    })
  }
}

const changeUpListActions = res => ({
  type: CHANGE_UP_LIST,
  upList: res.playlist
})
const changeNewListActions = res => ({
  type: CHANGE_NEW_LIST,
  newList: res.playlist
})
const changeOriginListActions = res => ({
  type: CHANGE_ORIGIN_LIST,
  originList: res.playlist
})

export const getTopListAction = params => {
  return dispatch => {
    getTopList(params).then(res => {
      switch (params.idx) {
        case 0:
          dispatch(changeUpListActions(res))
          break
        case 2:
          dispatch(changeNewListActions(res))
          break
        case 3:
          dispatch(changeOriginListActions(res))
          break
        default:
      }
    })
  }
}
