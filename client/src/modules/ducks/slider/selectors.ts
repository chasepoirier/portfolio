import * as THREE from 'three'
import { Slide } from './types'

export const loadTexturesFromSlides = (slides: Slide[]) =>
  slides.map((slide: Slide) =>
    new THREE.TextureLoader().load(
      require(`../../../images/bg-imgs/${slide.img}.jpg`)
    )
  )
