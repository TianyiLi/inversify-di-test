import 'reflect-metadata'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'inversify-react'
import { Container } from 'inversify'
import dynamic from 'next/dynamic'
import ServiceB from '../src/modules/serviceB'
import { TYPES } from '../src/modules/constant'

type DePromise<T> = T extends Promise<infer Module> ? Module : never
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      container={() => {
        const container = new Container()
        container
          .bind(TYPES.serviceA)
          .toDynamicValue((context) => {
            console.log(context)

            return import('../src/modules/serviceA').then(res => new res.default());
          })
        container.bind(TYPES.serviceB).to(ServiceB)
        return container
      }}
    >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
