import Request from '@/service'

import { AirRequest } from '@/service'

export function test() {
  return Request.request({
    url: '/home/multidata'
  })
}

//添加了自定义拦截器的新请求
export function airTest() {
  return AirRequest.request({
    url: '/home/highscore'
  })
}
