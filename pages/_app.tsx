import 'reflect-metadata'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { container } from '../src/modules/core/container'
import { Provider } from '../src/modules/inversify-react'
// type DePromise<T> = T extends Promise<infer Module> ? Module : never
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      container={() => {
        return container
      }}
    >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
