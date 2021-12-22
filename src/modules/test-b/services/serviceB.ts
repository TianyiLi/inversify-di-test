import { IServiceA, IServiceAKey } from '../../test-a/entities/index'
import {
  AbstractRequestClient,
  DIAbstractRequestClientKey,
} from '../../shared/interface/request-client'
import { IServiceB } from '../entities'
import { inject, injectable } from 'inversify'
@injectable()
export class ServiceB implements IServiceB {
  constructor(
    @inject(DIAbstractRequestClientKey)
    private _http: AbstractRequestClient,
    @inject(IServiceAKey)
    private _ServiceA: IServiceA
  ) {}

  getString() {
    return 'service B'
  }

  getAString() {
    return this._ServiceA.getString()
  }

  async getAjaxString() {
    const result = await this._http.get<string>('/api/hello')
    return result.data
  }
}
