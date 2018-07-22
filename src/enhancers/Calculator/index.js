import compose from 'recompose/compose'
import handlers from './handlers'
import state from './state'

export default compose(
  state,
  handlers
)
