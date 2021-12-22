import { TestAServiceModule } from '../services'
import { coreContainer } from '../../core/container'

export default (function AComponentLayout(children: React.ReactNode) {
  coreContainer.load(TestAServiceModule);
  console.log('run layout')
  return children
})
