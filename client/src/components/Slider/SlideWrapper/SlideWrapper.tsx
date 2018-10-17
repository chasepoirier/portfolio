import * as React from 'react'
import { animateSlider } from '../../../utils/animations'

interface Props {
  currentSlide: number
  percentTraveled: number
  totalSlides: number
  sliderIsMoving: boolean
}

interface State {
  slideWasClicked: boolean
  currentSlide: number
  offset: number
  startingMouseX: number
}

export default class SlideWrapper extends React.Component<Props, State> {
  private slideContainer = React.createRef<HTMLUListElement>()
  private slider = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)
    this.state = {
      currentSlide: props.currentSlide,
      offset: 0,
      slideWasClicked: false,
      startingMouseX: 0
    }
  }

  public componentDidUpdate(prevProps: Props) {
    const {
      percentTraveled,
      totalSlides,
      sliderIsMoving,
      currentSlide
    } = this.props

    if (!this.state.slideWasClicked) {
      const slideLength = this.calculateSlideLength()
      if (sliderIsMoving) {
        const distance =
          -((totalSlides - 1) * slideLength) * (percentTraveled / 100)
        animateSlider(1, distance)
      } else {
        const distance = -(slideLength * (currentSlide - 1))
        animateSlider(0.8, distance)
      }

      if (this.state.currentSlide !== currentSlide) {
        this.setState({ currentSlide })
      }
    }
  }

  public calculateSlideLength = () => {
    if (this.slideContainer.current) {
      const container = this.slideContainer.current as HTMLUListElement
      if (container.firstChild) {
        return container.children[0].clientWidth
      }
      return 0
    }
    return 0
  }

  public render() {
    const { sliderIsMoving, children } = this.props
    return (
      <div
        ref={this.slider}
        className={sliderIsMoving ? 'slide-wrapper moving' : 'slide-wrapper'}
      >
        <div className="expand-container">
          <ul ref={this.slideContainer} className="slide-container">
            {children}
          </ul>
        </div>
      </div>
    )
  }
}
