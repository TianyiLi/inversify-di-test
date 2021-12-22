import {coreContainer} from '../../core/container';
import { TestAServiceModule } from '../../test-a/services';
import { TestBServiceModule } from '../services';
export function BComponentLayout(child:React.ReactElement) {
  coreContainer.load(TestAServiceModule, TestBServiceModule)
  return child
}