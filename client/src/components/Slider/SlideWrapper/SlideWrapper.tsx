import { AppState } from 'modules/utils/types'
import * as React from 'react'
import { connect } from 'react-redux'
import { animateSlider } from '../../../utils/animations'

interface Props {
  totalSlides: number
  slider: AppState['slider']
}

interface State {
  slideWasClicked: boolean
  offset: number
  startingMouseX: number
}

class SlideWrapper extends React.Component<Props, State> {
  private slideContainer = React.createRef<HTMLUListElement>()
  private slider = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)
    this.state = {
      offset: 0,
      slideWasClicked: false,
      startingMouseX: 0
    }
  }

  public componentDidUpdate(prevProps: Props) {
    const {
      totalSlides,
      slider: { sliderIsMoving, currentSlide, percentTraveled }
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
    const {
      slider: { sliderIsMoving },
      children
    } = this.props
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

const mapStateToProps = (state: AppState) => ({
  slider: state.slider
})

export default connect(mapStateToProps)(SlideWrapper)
