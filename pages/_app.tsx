import 'reflect-metadata'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { container } from '../src/modules/core/container'
import { Provider } from 'inversify-react'
// type DePromise<T> = T extends Promise<infer Module> ? Module : never

type _appProps = AppProps & {
  Component: AppProps['Component'] & {
    getLayout?: (child: React.ReactElement) => React.ReactElement
  }
}

function MyApp({ Component, pageProps }: _appProps) {
  return (
    <Provider
      container={() => {
        return container
      }}
    >
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  )
}

export default MyApp
