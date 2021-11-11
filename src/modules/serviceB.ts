import { TYPES } from './constant'
import { IServiceB } from './test-interface'
import {provide} from 'inversify-binding-decorators'
@provide(TYPES.serviceB)
class ServiceB implements IServiceB {
  getString() {
    return 'service A'
  }
}

export default ServiceB
