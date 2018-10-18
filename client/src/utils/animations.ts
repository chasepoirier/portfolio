import { Power3, TimelineMax, TweenMax } from 'gsap'
import { getTypeFromClassName, returnSlideElements } from './dom'

const ease = Power3.easeOut

export const animateSlider = (duration: number, distance: number) => {
  TweenMax.to('.slide-container', duration, {
    ease: Power3.easeOut,
    x: distance
  })
}

export const introPageAnimation = (node: HTMLElement) => {
  const type = getTypeFromClassName(node.classList)
  switch (type) {
    case 'home':
      homePageIntroAnimation()
      break
    case 'work':
      workPageIntroAnimation()
      break
    default:
      defaultIntro(node)
  }
}

export const outroPageAnimation = (node: HTMLElement) => {
  TweenMax.fromTo(node, 0.35, { opacity: 1 }, { opacity: 0, ease })
}

const defaultIntro = (node: any) => {
  TweenMax.fromTo(
    node,
    0.4,
    { y: 10, opacity: 0 },
    { delay: 0.4, y: 0, opacity: 1, ease }
  )
}

const homePageIntroAnimation = () => {
  const overlay = '.home.page .overlay'
  const mainText = '.home.page h1'
  const subText = document.querySelectorAll('.home.page h2 span')
  const exploreBtn = '.home.page .content-container a'

  const subArr: any = Array.from(subText)
  subArr.push(exploreBtn)

  const tl = new TimelineMax()

  tl.to(mainText, 0, { opacity: 0 })
  tl.fromTo(overlay, 0.3, { scaleX: 0 }, { scaleX: 1, ease }, '+=.5')
  tl.to(mainText, 0, { opacity: 1 })
  tl.to(overlay, 0, { transformOrigin: 'right' })
  tl.to(overlay, 0.4, { scaleX: 0, ease })
  tl.staggerFromTo(
    subArr,
    0.6,
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, ease },
    0.1,
    '-=.3'
  )
}

const workPageIntroAnimation = () => {
  const root = document.querySelector('#slide-1') as HTMLElement
  const elements = returnSlideElements(root)
  const tl = new TimelineMax()

  tl.to(elements.title, 0, { opacity: 0 })
  tl.fromTo(
    elements.controls,
    0.4,
    { y: 10, opacity: 0 },
    { delay: 0.4, y: 0, opacity: 1, ease }
  )
  tl.fromTo(elements.titleOverlay, 0.3, { scaleX: 0 }, { scaleX: 1, ease })
  tl.to(elements.title, 0, { opacity: 1 })
  tl.to(elements.titleOverlay, 0, { transformOrigin: 'right' })
  tl.to(elements.titleOverlay, 0.4, { scaleX: 0, ease })
  tl.staggerFromTo(
    elements.subText,
    0.6,
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, ease },
    0.1,
    '-=.3'
  )
  tl.fromTo(elements.bgImage, 0.3, { scaleX: 0 }, { scaleX: 1, ease }, '-=1')
  tl.fromTo(
    elements.imgOverlay,
    0.2,
    { transformOrigin: 'right', scaleX: 1 },
    { scaleX: 0, ease },
    '-=.5'
  )
  tl.fromTo(
    elements.mainImage,
    1,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, ease },
    '-=.6'
  )
  tl.fromTo(elements.count, 0.6, { y: 98 }, { y: 0, ease }, '-=1.7')
}

const slideTransitionAnimation = (nodeId: number) => {
  const current = document.querySelector(`#slide-${nodeId}`) as HTMLDivElement
  const elements = returnSlideElements(current)
  const tl = new TimelineMax()

  tl.to(elements.title, 0, { opacity: 0, delay: 0.5 })
  tl.to(elements.title, 0, { opacity: 0 })
  tl.to(elements.imgOverlay, 0, {
    scaleX: 1,
    transformOrigin: 'right',
    zIndex: 100
  })
  tl.fromTo(
    elements.titleOverlay,
    0.3,
    { scaleX: 0, transformOrigin: 'left' },
    { scaleX: 1, ease }
  )
  tl.to(elements.title, 0, { opacity: 1 })
  tl.to(elements.titleOverlay, 0, { transformOrigin: 'right' })
  tl.to(elements.titleOverlay, 0.4, { scaleX: 0, ease })
  tl.staggerFromTo(
    elements.subText,
    0.6,
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, ease },
    0.1,
    '-=.3'
  )
  tl.fromTo(elements.bgImage, 0.3, { scaleX: 0 }, { scaleX: 1, ease }, '-=1')
  tl.fromTo(
    elements.imgOverlay,
    0.2,
    { transformOrigin: 'right', scaleX: 1 },
    { scaleX: 0, ease },
    '-=.6'
  )
  tl.fromTo(
    elements.mainImage,
    1,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, ease },
    '-=.6'
  )
  tl.fromTo(elements.count, 0.8, { opacity: 0 }, { opacity: 1, ease }, '-=1.6')
}

export { slideTransitionAnimation }
