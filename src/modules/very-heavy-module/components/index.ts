import dynamic from 'next/dynamic'

export const ButtonComponent = dynamic<any>(() =>
  import('./button').then((res) => res.ButtonComponent)
)
export const LodashComponent = dynamic<any>(() =>
  import('./lodash-full-import').then((res) => res.LodashComponent)
)
export const Log = dynamic<any>(() => import('./log').then((res) => res.Log))
