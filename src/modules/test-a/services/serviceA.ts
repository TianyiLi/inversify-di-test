import { IServiceA } from '../entities'
import { injectable, inject } from 'inversify'
import {
  AbstractRequestClient,
  DIAbstractRequestClientKey,
} from '../../shared/interface/request-client'
@injectable()
class ServiceA implements IServiceA {
  constructor(
    @inject(DIAbstractRequestClientKey)
    private baseClient: AbstractRequestClient
  ) {}
  async getString() {
    const res = await this.baseClient
      .get<{ name: string; }>('/api/hello');
    return res.data.name;
  }
}

export default ServiceA
