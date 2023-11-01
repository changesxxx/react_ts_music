import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const Request = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const AirRequest = new MyRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api/',
  timeout: TIME_OUT,
  //自定义拦截器
  interceptors: {
    requestSuccessFn(config) {
      console.log('AirRequest全局请求成功拦截器')
      return config
    },
    responseSuccessFn(response) {
      console.log('AirRequest全局响应成功拦截器')
      return response
    }
  }
})

export default Request
