import { IServiceA } from './../../test-interface'
import { ContainerModule } from 'inversify'
import ServiceA from './serviceA'
import { TYPES } from '../../constant'
export const TestAServiceModule = new ContainerModule((bind) => {
  bind<IServiceA>(TYPES.serviceA).to(ServiceA)
})

