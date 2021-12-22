import { useInjection } from 'inversify-react'
import { IServiceA, IServiceAKey } from '../entities'
import Link from 'next/link'
export const AMainPage = () => {
  const aService = useInjection<IServiceA>(IServiceAKey)

  function onClick() {
    aService.getString().then((res) => {
      alert(res)
    })
  }

  return (
    <div>
      This is A service
      <button onClick={onClick}>trigger A service</button>
      <Link href="/service-b">to b</Link>
    </div>
  )
}
