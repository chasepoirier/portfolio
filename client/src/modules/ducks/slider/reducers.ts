import * as fromActions from './actions'
import * as types from './types'

// import * as types from './types'

const initialState: types.SliderState = {
  currentSlide: 1,
  innerOffset: 45,
  percentTraveled: 0,
  sliderIsMoving: false
}

const slider = (
  state: types.SliderState = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_SLIDE:
      return { ...state, currentSlide: action.payload.current }
    case types.UPDATE_PERCENT_TRAVELED:
      return { ...state, percentTraveled: action.payload.percentTraveled }
    case types.TOGGLE_SLIDER_MOVING:
      return { ...state, sliderIsMoving: action.payload.toggle }
    default: {
      return state
    }
  }
}

export default slider
