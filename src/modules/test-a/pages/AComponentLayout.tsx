import { TestAServiceModule } from '../services'
import { container } from '../../core/container'
import { useEffect } from 'react'
import type { FC } from 'react'

container.load(TestAServiceModule)

export default (function AComponentLayout(children: React.ReactNode) {
  useEffect(() => {
    return () => {
      container.unload(TestAServiceModule)
    }
  }, [])

  return children
})
