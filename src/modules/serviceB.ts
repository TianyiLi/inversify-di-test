import { TYPES } from './constant'
import { ISerivceB } from './test-interface'
import {provide} from 'inversify-binding-decorators'
@provide(TYPES.serviceB)
class ServiceB implements ISerivceB {
  getString() {
    return 'service A'
  }
}

export default ServiceB
