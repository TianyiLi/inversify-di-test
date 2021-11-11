import { useInjection } from '../src/modules/inversify-react'
import { useEffect, useState } from 'react'
import { TYPES } from '../src/modules/constant'
import { IServiceB } from '../src/modules/test-interface'
export default function ServiceBBB() {
  const serviceB = useInjection<IServiceB>(TYPES.serviceB)

  const [state, setState] = useState('')

  useEffect(() => {
    const str = serviceB.getString()
    setState(str)
  }, [])

  return <>{state}</>
}
