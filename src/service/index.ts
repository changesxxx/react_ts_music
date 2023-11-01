import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const Request = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default Request
