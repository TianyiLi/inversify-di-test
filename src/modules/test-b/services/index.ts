import { IServiceB, IserviceBKey } from '../entities'
import { ContainerModule } from 'inversify'
import { ServiceB } from './serviceB'
export const TestBServiceModule = new ContainerModule((_, __, ___, rebind) => {
  rebind<IServiceB>(IserviceBKey).to(ServiceB)
})
