import withState from 'recompose/withState'
import compose from 'recompose/compose'

export default compose(
  withState('grossSalary', 'updateGrossSalary', '')
)
