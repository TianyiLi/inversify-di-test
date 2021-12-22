import { interfaces } from 'inversify'

export function inversifyBind(
  ...services: [string, new (...arg: any) => any][]
) {
  return (
    bind: interfaces.Bind,
    __: interfaces.Unbind,
    isBound: interfaces.IsBound
  ) => {
    services.forEach(([key, service]) => {
      !isBound(key) && bind(key).to(service)
    })
  }
}
