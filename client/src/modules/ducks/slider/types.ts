export const UPDATE_CURRENT_SLIDE = '@@slider/UPDATE_CURRENT_SLIDE'
export const UPDATE_PERCENT_TRAVELED = '@@slider/UPDATE_PERCENT_TRAVELED'
export const TOGGLE_SLIDER_MOVING = '@@slider/TOGGLE_SLIDER_MOVING'
export const RESET_SLIDER = '@@slider/RESET_SLIDER'

export interface SliderState {
  currentSlide: number
  percentTraveled: number
  sliderIsMoving: boolean
  innerOffset: number
}
