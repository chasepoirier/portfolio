import { sliderOperations } from 'ducks/slider'
import * as React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from 'src/types/redux'
import './slider-controls.css'

interface Props {
  setCurrentSlide: (slide: number, expanding: boolean) => void
  totalSlides: number
  slider: ReduxState['slider']
  toggleMovingSlider: typeof sliderOperations.toggleSliderMoving
  updateCurrentSlide: typeof sliderOperations.updateCurrentSlide
  updatePercentTraveled: typeof sliderOperations.updatePercentTraveled
}

interface State {
  controllerIsClicked: boolean
  offset: number
}

class SliderControls extends React.Component<Props, State> {
  private boundHandleMouseMove: any
  private boundHandleMouseUp: any

  private controller = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.state = {
      controllerIsClicked: false,
      offset: 0
    }

    this.boundHandleMouseMove = this.handleMouseMove.bind(this)
    this.boundHandleMouseUp = this.handleMouseUp.bind(this)
  }

  public componentDidMount() {
    window.addEventListener('mousemove', this.boundHandleMouseMove)
    window.addEventListener('mouseup', this.boundHandleMouseUp)
  }

  public componentWillUnmount() {
    window.removeEventListener('mousemove', this.boundHandleMouseMove)
    window.removeEventListener('mouseup', this.boundHandleMouseUp)
  }

  public componentDidUpdate(prevProps: Props) {
    if (
      prevProps.slider.currentSlide !== this.props.slider.currentSlide &&
      !this.props.slider.sliderIsMoving
    ) {
      // update the position of the controller
      this.calculateEndSliderPos(this.props.slider.currentSlide)
    }
  }

  public handleMouseDown = () => {
    const body = document.querySelector('body')
    const { current: controller } = this.controller
    if (body) {
      body.style.userSelect = 'none'
    }
    if (controller && controller.parentElement) {
      const offset = controller.parentElement.getBoundingClientRect().left
      this.props.toggleMovingSlider(true)
      this.setState({ offset, controllerIsClicked: true })
    }
  }

  public handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (this.props.slider.sliderIsMoving && this.state.controllerIsClicked) {
      const body = document.querySelector('body')
      if (body) {
        body.style.userSelect = 'inheret'
      }

      const {
        toggleMovingSlider,
        setCurrentSlide,
        slider: { currentSlide }
      } = this.props
      toggleMovingSlider(false)
      setCurrentSlide(currentSlide, true)
      this.calculateEndSliderPos(currentSlide)
      this.setState({ controllerIsClicked: false })
    }
  }

  public handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.controllerIsClicked && this.controller.current) {
      // tslint:disable:no-console
      const { style, offsetWidth } = this.controller.current
      const { innerOffset } = this.props.slider
      const pos = e.clientX - this.state.offset - offsetWidth / 2

      const max = this.calculateTotalSliderLength()
      const totalLength = max + innerOffset * 2

      if (pos < -innerOffset) {
        // tslint:disable:no-console
        console.log('here')
        style.transform = `translateX(${-innerOffset}px)`
        this.calculatePercentTraveled(0, totalLength)
      } else if (pos > max + innerOffset) {
        style.transform = `translateX(${max + innerOffset}px)`
        this.calculatePercentTraveled(totalLength, totalLength)
      } else {
        style.transform = `translateX(${pos}px)`
        this.calculateCurrentSlide(pos, totalLength)
        this.calculatePercentTraveled(pos + innerOffset, totalLength)
      }
    }
  }

  public calculateCurrentSlide = (pos: number, totalLength: number) => {
    const {
      slider: { currentSlide, innerOffset },
      updateCurrentSlide
    } = this.props
    const lenghtOfOneSlide = totalLength / (this.props.totalSlides - 1)
    const currentSlidePos = lenghtOfOneSlide * (currentSlide - 1) - innerOffset

    if (pos > currentSlidePos + lenghtOfOneSlide / 2) {
      updateCurrentSlide(currentSlide + 1)
    } else if (pos < currentSlidePos - lenghtOfOneSlide / 2) {
      updateCurrentSlide(currentSlide - 1)
    }
  }

  // determines how far slider has moved relative to start
  public calculatePercentTraveled = (pos: number, totalLength: number) => {
    const percentTraveled = (pos / totalLength) * 100
    this.props.updatePercentTraveled(percentTraveled)
  }

  // moves the slider to it's final position relative to current slide
  public calculateEndSliderPos = (current: number) => {
    const { innerOffset } = this.props.slider
    const totalLength = this.calculateTotalSliderLength() + innerOffset * 2
    const lenghtOfOneSlide = totalLength / (this.props.totalSlides - 1)
    const currentSlidePos = lenghtOfOneSlide * (current - 1) - innerOffset

    if (this.controller.current) {
      this.controller.current.style.transform = `translateX(${currentSlidePos}px)`
    }
  }

  // returns a pixel value of the total slider length
  public calculateTotalSliderLength = () => {
    const { current: controller } = this.controller
    if (controller && controller.parentElement) {
      const { parentElement, offsetWidth } = controller
      return parentElement.offsetWidth - offsetWidth
    }
    return 0
  }

  // returns the number of the project
  public renderNumbersForProjects = () => {
    const numbers = []

    for (let i = 0; i < this.props.totalSlides; i++) {
      numbers.push(
        <div
          key={i}
          className="number"
          onClick={() => this.props.setCurrentSlide(i + 1, false)}
        >
          {`0${i + 1}`}
        </div>
      )
    }
    return numbers
  }

  public render() {
    return (
      <div className="slider-controls">
        <div className="slider-line">
          <div
            ref={this.controller}
            onMouseDown={this.handleMouseDown}
            className="controller-wrapper"
          >
            <div className="controller">
              <div className="current-project">{`0${
                this.props.slider.currentSlide
              }`}</div>
              <div className="instructions">HOLD & DRAG</div>
            </div>
          </div>
          <div className="numbers-container">
            {this.renderNumbersForProjects()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  slider: state.slider
})

export default connect(
  mapStateToProps,
  {
    toggleMovingSlider: sliderOperations.toggleSliderMoving,
    updateCurrentSlide: sliderOperations.updateCurrentSlide,
    updatePercentTraveled: sliderOperations.updatePercentTraveled
  }
)(SliderControls)
