import { useInjection } from 'inversify-react'
import { IServiceB, IServiceBKey } from '../entities'
import Link from 'next/link'

export const BComponentMainPage = () => {
  const serviceB = useInjection<IServiceB>(IServiceBKey)

  return (
    <div>
      <button
        onClick={() => {
          serviceB.getAString().then((res) => {
            alert(res)
          })
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          alert(serviceB.getString())
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          serviceB.getAjaxString().then((res) => alert(res))
        }}
      >
        3
      </button>
      <Link href="/service-a">to a</Link>
    </div>
  )
}
