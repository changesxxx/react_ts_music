import type {
  CreateAxiosDefaults,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

interface IInterceptors {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig //axios request config type
  ) => InternalAxiosRequestConfig
  requestFailFn?: () => void
  responseSuccessFn?: (response: AxiosResponse) => AxiosResponse //axios response config type
  responseFailFn?: () => void
}

interface customInterceptorsType extends CreateAxiosDefaults {
  interceptors?: IInterceptors
}

export default customInterceptorsType
