import * as React from 'react'

import './slider-controls.css'

interface IProps {
  currentSlide: number
  toggleSliderIsMoving: any
  setCurrentSlide: any
  sliderIsMoving: boolean
  totalSlides: number
  calculatePercentTraveled: any
}

interface IState {
  controllerWasClicked: boolean
  currentSlide: number
  innerOffset: number
  offset: number
}

class SliderControls extends React.Component<IProps, IState> {
  private boundHandleMouseMove: any
  private boundHandleMouseUp: any

  private controller = React.createRef<HTMLDivElement>()

  constructor(props: IProps) {
    super(props)

    this.state = {
      controllerWasClicked: false,
      currentSlide: this.props.currentSlide,
      innerOffset: 45,
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

  public componentDidUpdate(prevProps: IProps) {
    if (prevProps.currentSlide !== this.props.currentSlide) {
      this.setState({ currentSlide: this.props.currentSlide })
      this.calculateEndSliderPos(this.props.currentSlide)
    }
  }

  public handleMouseDown = () => {
    const body = document.querySelector('body')
    if (body) {
      body.style.userSelect = 'none'
    }
    if (this.controller.current && this.controller.current.parentElement) {
      const offset = this.controller.current.parentElement.getBoundingClientRect()
        .left
      this.props.toggleSliderIsMoving(true)
      this.setState({ offset, controllerWasClicked: true })
    }
  }

  public handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (this.props.sliderIsMoving && this.state.controllerWasClicked) {
      const body = document.querySelector('body')
      if (body) {
        body.style.userSelect = 'inheret'
      }
      this.props.toggleSliderIsMoving(false)
      this.props.setCurrentSlide(this.state.currentSlide, true)
      this.calculateEndSliderPos(this.props.currentSlide)
      this.setState({ controllerWasClicked: false })
    }
  }

  public handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.controllerWasClicked && this.controller.current) {
      const { style, offsetWidth } = this.controller.current
      const { innerOffset } = this.state
      const pos = e.clientX - this.state.offset - offsetWidth / 2
      const max = this.calculateTotalSliderLength()
      const totalLength = max + innerOffset * 2

      if (this.props.sliderIsMoving) {
        if (pos < -innerOffset) {
          style.transform = `translateX(${-innerOffset}px)`
          this.props.calculatePercentTraveled(0, totalLength)
        } else if (pos > max + innerOffset) {
          style.transform = `translateX(${max + innerOffset}px)`
          this.props.calculatePercentTraveled(totalLength, totalLength)
        } else {
          style.transform = `translateX(${pos}px)`
          this.calculateCurrentSlide(pos, totalLength)
          this.props.calculatePercentTraveled(pos + innerOffset, totalLength)
        }
      }
    }
  }

  public calculateCurrentSlide = (pos: number, totalLength: number) => {
    const { currentSlide, innerOffset } = this.state
    const lenghtOfOneSlide = totalLength / (this.props.totalSlides - 1)
    const currentSlidePos = lenghtOfOneSlide * (currentSlide - 1) - innerOffset

    if (pos > currentSlidePos + lenghtOfOneSlide / 2) {
      this.setState({ currentSlide: this.state.currentSlide + 1 })
    } else if (pos < currentSlidePos - lenghtOfOneSlide / 2) {
      this.setState({ currentSlide: this.state.currentSlide - 1 })
    }
  }

  public calculateEndSliderPos = (current: number) => {
    const { innerOffset } = this.state
    const totalLength = this.calculateTotalSliderLength() + innerOffset * 2
    const lenghtOfOneSlide = totalLength / (this.props.totalSlides - 1)
    const currentSlidePos = lenghtOfOneSlide * (current - 1) - innerOffset

    if (this.controller.current) {
      this.controller.current.style.transform = `translateX(${currentSlidePos}px)`
    }
  }

  public calculateTotalSliderLength = () => {
    if (this.controller.current && this.controller.current.parentElement) {
      const { parentElement, offsetWidth } = this.controller.current
      return parentElement.offsetWidth - offsetWidth
    }
    return 0
  }

  public renderNumbersForProjects = () => {
    const numbers = []

    for (let i = 0; i < this.props.totalSlides; i++) {
      numbers.push(
        <div
          key={i}
          className="number"
          onClick={() => this.props.setCurrentSlide(i + 1)}
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
                this.state.currentSlide
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

export default SliderControls
