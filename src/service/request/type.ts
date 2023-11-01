import type {
  CreateAxiosDefaults,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

interface IInterceptors {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailFn?: () => void
  responseSuccessFn?: (response: AxiosResponse) => AxiosResponse
  responseFailFn?: () => void
}

interface customInterceptorsType extends CreateAxiosDefaults {
  interceptors?: IInterceptors
}

export default customInterceptorsType
