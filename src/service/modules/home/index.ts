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

interface IData {
  list: any[]
  subtitle: string
  title: string
  type: string
  _id: string
}

//单次请求拦截器
export function longforTest() {
  return AirRequest.request<IData>({
    url: '/home/longfor',
    interceptors: {
      requestSuccessFn(config) {
        console.log('/home/longfor 单次请求拦截')
        return config
      },
      responseSuccessFn(response) {
        console.log('/home/longfor 单次相应拦截')
        return response
      }
    }
  })
}
