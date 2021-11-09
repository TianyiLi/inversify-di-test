import _ from 'lodash'

export const LodashComponent = () => {
  const cal = _.multiply(1, 2)
  return <div>{cal}</div>
}
