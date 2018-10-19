import { Texture } from 'three'

export const UPDATE_CURRENT_SLIDE = '@@slider/UPDATE_CURRENT_SLIDE'
export const UPDATE_PERCENT_TRAVELED = '@@slider/UPDATE_PERCENT_TRAVELED'
export const TOGGLE_SLIDER_MOVING = '@@slider/TOGGLE_SLIDER_MOVING'
export const RESET_SLIDER = '@@slider/RESET_SLIDER'
export const LOAD_TEXTURES = '@@slider/LOAD_TEXTURES'

export interface Slide {
  desc: string
  img: string
  link: string | null
  title: string
}

export interface SliderState {
  currentSlide: number
  percentTraveled: number
  sliderIsMoving: boolean
  innerOffset: number
  slides: Slide[]
  textures: Texture[]
}
