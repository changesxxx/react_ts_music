import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosInterceptorManager
} from 'axios'

interface IInterceptors {
  requestSuccessFn?: (
    config: AxiosRequestConfig //axios request config type
  ) => AxiosRequestConfig
  requestFailFn?: () => void
  responseSuccessFn?: (response: AxiosResponse) => AxiosResponse //axios response config type
  responseFailFn?: () => void
}

interface customInterceptorsType extends AxiosRequestConfig {
  interceptors?: IInterceptors
}

/*
重写axios实例 去除原本interceptors类型 重新定义interceptors
*/
export interface coverAxiosInstance
  extends Omit<AxiosInstance, 'interceptors'> {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }
}

export default customInterceptorsType
