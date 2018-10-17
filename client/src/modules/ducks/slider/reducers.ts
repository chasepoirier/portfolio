import * as fromActions from './actions'
import * as types from './types'

// import * as types from './types'

const initialState: types.SliderState = {
  currentSlide: 1
}

const slider = (
  state: types.SliderState = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_SLIDE: {
      return { ...state, currentSlide: action.payload.current }
    }
    default: {
      return state
    }
  }
}

export default slider
