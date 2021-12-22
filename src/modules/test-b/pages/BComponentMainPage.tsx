import { useInjection } from 'inversify-react'
import { IServiceB, IserviceBKey } from '../entities'

export const BComponentMainPage = () => {
  const serviceB = useInjection<IServiceB>(IserviceBKey)

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
    </div>
  )
}
