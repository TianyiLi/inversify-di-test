import { TYPES } from './constant'
import { IServiceA } from './test-interface'
import { provide } from 'inversify-binding-decorators'
@provide(TYPES.serviceA)
class ServiceA implements IServiceA {
  getString() {
    return 'service A'
  }
}

export default ServiceA
