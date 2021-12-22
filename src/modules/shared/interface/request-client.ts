import type { AxiosRequestConfig, AxiosResponse } from 'axios'

type params = { [x: string]: string | number }
type payload = { [x: string]: string | number }
export abstract class AbstractRequestClient {
  abstract get: <T>(url: string, params?: params) => Promise<AxiosResponse<T>>
  abstract put: <T>(
    url: string,
    params?: params,
    payload?: payload
  ) => Promise<AxiosResponse<T>>
  abstract delete: <T>(
    url: string,
    params?: params,
    payload?: payload
  ) => Promise<AxiosResponse<T>>
  abstract post: <T>(
    url: string,
    params?: params,
    payload?: payload
  ) => Promise<AxiosResponse<T>>
}
export const DIAbstractRequestClientKey = 'RequestClient'
