import { useEffect } from 'react';
import {container} from '../../core/container';
import { TestAServiceModule } from '../../test-a/services';
import { TestBServiceModule } from '../services';
export function BComponentLayout(child:React.ReactElement) {

  useEffect(() => {
    container.load(TestAServiceModule, TestBServiceModule)
  }, [])
  
  return child
}