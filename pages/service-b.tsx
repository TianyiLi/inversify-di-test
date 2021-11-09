import { useInjection } from 'inversify-react'
import { useEffect, useState } from 'react';
import { TYPES } from '../src/modules/constant'
import { IServiceA } from '../src/modules/test-interface'
export default function ServiceBBB() {
  const serviceB = useInjection<Promise<IServiceA>>(TYPES.serviceA)

  const [state, setState] = useState('');

  useEffect(() => {
    serviceB.then(res => {
      console.log(res);
      setState(res.getString());
    })
  }, [])

  return <>{state}</>
}
