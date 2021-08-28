import request from './request'

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends(params) {
  return request({
    url: '/personalized',
    params
  })
}

export function getNewAlbum(params) {
  return request({
    url: '/top/album',
    params
  })
}

export function getTopList(params) {
  return request({
    url: '/top/list',
    params
  })
}
