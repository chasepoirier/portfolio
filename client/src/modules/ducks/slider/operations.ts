// import api from '../../api'
import { Actions } from './actions'
import { loadTexturesFromSlides } from './selectors'
import { Slide } from './types'

export const toggleSliderMoving = (toggle: boolean) =>
  Actions.toggleSliderMoving(toggle)

export const updateCurrentSlide = (current: number) =>
  Actions.updateCurrentSlide(current)

export const updatePercentTraveled = (precentTraveled: number) =>
  Actions.updatePercentTraveled(precentTraveled)

export const resetSlider = () => Actions.resetSlider()

export const loadTextures = (slides: Slide[]) =>
  Actions.loadTextures(loadTexturesFromSlides(slides))
