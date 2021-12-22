import { TestAServiceModule } from '../services'
import { container } from '../../core/container'

export default (function AComponentLayout(children: React.ReactNode) {
  container.load(TestAServiceModule)
  console.log('run layout')
  return children
})
