import request from './request'

export function getHotAlbums () {
  return request({
    url:'/album/newest'
  })
}

export function getTopAlbums (params) {
  return request({
    url: '/album/newest',
    params
  })
}