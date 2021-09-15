import request from './request'

export function getCategoryList() {
  return request({
    url: '/playlist/catlist'
  })
}
