import { Power3, TimelineMax, TweenMax } from 'gsap'
import getTypeFromClassName from './getTypeFromClassName'

const ease = Power3.easeOut

export const animateSlider = (duration: any, distance: any, slide: any) => {
  TweenMax.to('.slide-container', duration, {
    ease: Power3.easeOut,
    x: distance
  })
}

export const introPageAnimation = (node: any) => {
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

export const outroPageAnimation = (node: any) => {
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
  const controls = '.work.page .slider-controls'
  const titleOverlay = '.work.page .slide.current .title-container span'
  const title = '.work.page .slide.current h3'
  const subText = [
    '.work.page .slide.current h4',
    '.work.page .slide.current .left-col .explore'
  ]
  const imgOverlay = '.work.page .slide.current .bg-img .overlay'
  const bgImg = '.work.page .slide.current .bg-img'
  const mainImg = '.work.page .slide.current .main-img'
  const slideCount = '.work.page .slide.current .slide-count'

  const tl = new TimelineMax()

  tl.to(title, 0, { opacity: 0 })
  tl.fromTo(
    controls,
    0.4,
    { y: 10, opacity: 0 },
    { delay: 0.4, y: 0, opacity: 1, ease }
  )
  tl.fromTo(titleOverlay, 0.3, { scaleX: 0 }, { scaleX: 1, ease })
  tl.to(title, 0, { opacity: 1 })
  tl.to(titleOverlay, 0, { transformOrigin: 'right' })
  tl.to(titleOverlay, 0.4, { scaleX: 0, ease })
  tl.staggerFromTo(
    subText,
    0.6,
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, ease },
    0.1,
    '-=.3'
  )
  tl.fromTo(bgImg, 0.3, { scaleX: 0 }, { scaleX: 1, ease }, '-=1')
  tl.fromTo(
    imgOverlay,
    0.2,
    { transformOrigin: 'right', scaleX: 1 },
    { scaleX: 0, ease },
    '-=.5'
  )
  tl.fromTo(
    mainImg,
    1,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, ease },
    '-=.6'
  )
  tl.fromTo(slideCount, 0.6, { y: 98 }, { y: 0, ease }, '-=1.7')
}

const slideTransitionAnimation = () => {
  const titleOverlay = '.work.page .slide.current .title-container span'
  const title = '.work.page .slide.current h3'
  const subText = [
    '.work.page .slide.current h4',
    '.work.page .slide.current .left-col a'
  ]
  const imgOverlay = '.work.page .slide.current .bg-img .overlay'
  const bgImg = '.work.page .slide.current .bg-img'
  const mainImg = '.work.page .slide.current .main-img'
  const slideCount = '.work.page .slide.current .slide-count'

  const tl = new TimelineMax()
  tl.to(title, 0, { opacity: 0 })
  tl.to(title, 0, { opacity: 0, delay: 0.5 })
  tl.to(imgOverlay, 0, { scaleX: 1, zIndex: 100, transformOrigin: 'right' })
  tl.fromTo(
    titleOverlay,
    0.3,
    { scaleX: 0, transformOrigin: 'left' },
    { scaleX: 1, ease }
  )
  tl.to(title, 0, { opacity: 1 })
  tl.to(titleOverlay, 0, { transformOrigin: 'right' })
  tl.to(titleOverlay, 0.4, { scaleX: 0, ease })
  tl.staggerFromTo(
    subText,
    0.6,
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, ease },
    0.1,
    '-=.3'
  )
  tl.fromTo(bgImg, 0.3, { scaleX: 0 }, { scaleX: 1, ease }, '-=1')
  tl.fromTo(
    imgOverlay,
    0.2,
    { transformOrigin: 'right', scaleX: 1 },
    { scaleX: 0, ease },
    '-=.6'
  )
  tl.fromTo(
    mainImg,
    1,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, ease },
    '-=.6'
  )
  tl.fromTo(slideCount, 0.8, { opacity: 0 }, { opacity: 1, ease }, '-=1.6')
}

export { slideTransitionAnimation }
