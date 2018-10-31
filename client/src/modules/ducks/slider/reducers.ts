import sliderMetaData from 'src/data/sliderMetaData'
import * as fromActions from './actions'
import * as types from './types'

const initialState: types.SliderState = {
  currentSlide: 1,
  innerOffset: 45,
  percentTraveled: 0,
  sliderIsMoving: false,
  slides: sliderMetaData,
  textures: []
}

const slider = (
  state: types.SliderState = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.LOAD_TEXTURES:
      return { ...state, textures: action.payload.textures }
    case types.UPDATE_CURRENT_SLIDE:
      return { ...state, currentSlide: action.payload.current }
    case types.UPDATE_PERCENT_TRAVELED:
      return { ...state, percentTraveled: action.payload.percentTraveled }
    case types.TOGGLE_SLIDER_MOVING:
      return { ...state, sliderIsMoving: action.payload.toggle }
    case types.RESET_SLIDER:
      return { ...initialState, textures: state.textures }
    default: {
      return state
    }
  }
}

export default slider
