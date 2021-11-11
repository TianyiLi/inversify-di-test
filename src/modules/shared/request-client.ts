import Axios, { AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
import {
  AbstractRequestClient,
  DIAbstractRequestClientKey,
} from './interface/request-client'
import { injectable } from 'inversify'

@injectable()
export default class BaseRequestClient implements AbstractRequestClient {
  constructor(private http: AxiosInstance) {}
  createRequest(config: AxiosRequestConfig<any> | undefined) {
    return new BaseRequestClient(Axios.create(config))
  }
  get<T>(url: string, params?: any) {
    return this.http.get<T>(url, { params })
  }
  put(url: string, params: any, payload: any) {
    return this.http.get(url, { params, data: payload })
  }
  delete(url: string, params: any, payload: any) {
    return this.http.delete(url, { params, data: payload })
  }
  post(url: string, params: any, payload: any) {
    return this.http.post(url, { params, data: payload })
  }
}
