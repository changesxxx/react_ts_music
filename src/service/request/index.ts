import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import type customInterceptorsType from './type'

class MyRequest {
  //生命实例type
  instance: AxiosInstance
  //创建axios实例
  //config添加type类型
  constructor(config: customInterceptorsType) {
    this.instance = axios.create(config)

    //添加全局拦截器
    //全局请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功拦截器')
        return config
      },
      (err) => {
        console.log('全局请求失败拦截器')
      }
    )
    //全局响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        console.log('全局响应成功拦截器')
        return response
      },
      (err) => {
        console.log('全局响应失败拦截器')
      }
    )

    //对于单个请求的拦截器
    //全局请求拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn
    )
    //全局响应拦截器
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn
    )
  }

  //请求配置type
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default MyRequest
