import { IServiceAKey } from '../entities'
import { ContainerModule } from 'inversify'
import ServiceA from './serviceA'
import { inversifyBind } from '../../shared/inversify-bind'
export const TestAServiceModule = new ContainerModule(
  inversifyBind([IServiceAKey, ServiceA])
)
