import axios from 'axios'
import type { AxiosResponse } from 'axios'
//自定义拦截器类型
import type customInterceptorsType from './type'
import type { coverAxiosInstance } from './type'

class MyRequest {
  //生命实例type
  instance: coverAxiosInstance
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

    //对于单个实例请求的拦截器
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
  /*
  customInterceptorsType: extends AxiosRequestConfig 继承自AxiosRequestConfig
  又因requestSuccessFn:AxiosRequestConfig
  所以这里才可以直接传参config
  否则axios要求拦截器中的config type为InternalAxiosRequestConfig(headers必传项)
  */
  request<T = any>(config: customInterceptorsType) {
    if (config?.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    /*
      原有方式:return this.instance.request(config)
      无法获取响应结果 响应拦截器无法添加
      new Promise返回response结果 并在返回前添加响应拦截
    */
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config?.interceptors?.responseSuccessFn) {
            // res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default MyRequest
