export const selectElement = (root: HTMLElement, selector: string) =>
  root.querySelector(selector) as HTMLElement

export const getTypeFromClassName = (classList: any) => {
  const arr = Array.from(classList)
  const filtered = arr.filter(name => name !== 'page' && name !== 'fade-exit')
  return filtered[0]
}

export const returnSlideElements = (root: HTMLElement) => {
  const {
    leftCol: {
      children: { header, headerOverlay, subHeader, slideLink, slideCount }
    },
    rightCol: {
      children: { bgImg, bgImgOverlay, mainImg }
    }
  } = SlideClassNames.children

  const controls = selectElement(
    document.querySelector('body') as HTMLElement,
    SlideClassNames.sliderControls
  )
  const titleOverlay = selectElement(root, headerOverlay)
  const title = selectElement(root, header)
  const subText = [
    selectElement(root, subHeader),
    selectElement(root, slideLink)
  ]
  const imgOverlay = selectElement(root, bgImgOverlay)
  const bgImage = selectElement(root, bgImg)
  const mainImage = selectElement(root, mainImg)
  const count = selectElement(root, slideCount)

  return {
    bgImage,
    controls,
    count,
    imgOverlay,
    mainImage,
    subText,
    title,
    titleOverlay
  }
}

export const SlideClassNames = {
  children: {
    leftCol: {
      children: {
        header: '.title-container h3',
        headerOverlay: '.title-container span',
        slideCount: '.count-container .slide-count',
        slideLink: '.text-container .link',
        subHeader: '.text-container h4'
      },
      root: '.leftCol'
    },
    rightCol: {
      children: {
        bgImg: '.bg-img',
        bgImgOverlay: '.bg-img .overlay',
        canvasContainer: '.canvas',
        mainImg: '.main-img'
      }
    }
  },
  root: '.slide',
  sliderControls: '.work .slider-controls'
}
