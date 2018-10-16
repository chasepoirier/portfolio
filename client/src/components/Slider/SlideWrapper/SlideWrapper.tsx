import * as React from 'react'
import { animateSlider } from '../../../utils/animations'

interface IProps {
  currentSlide: number
  toggleSliderIsMoving: any
  percentTraveled: number
  totalSlides: number
  sliderIsMoving: boolean
  setCurrentSlide: any
}

interface IState {
  slideWasClicked: boolean
  currentSlide: number
  offset: number
  startingMouseX: number
}

export default class SlideWrapper extends React.Component<IProps, IState> {
  private boundHandleMouseMove: any
  private boundHandleMouseUp: any
  private slideContainer = React.createRef<HTMLUListElement>()
  private slider = React.createRef<HTMLDivElement>()

  constructor(props: IProps) {
    super(props)
    this.state = {
      currentSlide: props.currentSlide,
      offset: 0,
      slideWasClicked: false,
      startingMouseX: 0
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
        animateSlider(1, distance, this.state.currentSlide)
      } else if (
        !sliderIsMoving &&
        prevProps.currentSlide !== this.props.currentSlide
      ) {
        const distance = -(slideLength * (currentSlide - 1))
        animateSlider(0.8, distance, this.state.currentSlide)
      }

      if (this.state.currentSlide !== currentSlide) {
        this.setState({ currentSlide })
      }
    }
  }

  public handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.className !== 'not-draggable') {
      const body = document.querySelector('body')
      if (body && this.slider.current) {
        body.style.userSelect = 'none'

        const offset = this.slider.current.children[0].getBoundingClientRect()
          .left
        this.props.toggleSliderIsMoving(true)
        this.setState({
          offset,
          slideWasClicked: true,
          startingMouseX: e.screenX
        })
      }
    }
  }

  public handleMouseUp = (e: React.MouseEvent<HTMLBodyElement>) => {
    if (this.props.sliderIsMoving && this.state.slideWasClicked) {
      const body = document.querySelector('body')
      if (body) {
        body.style.userSelect = 'inherit'
      }
      this.props.toggleSliderIsMoving(false)
      this.props.setCurrentSlide(this.state.currentSlide, true)
      this.calculateEndSliderPos(this.state.currentSlide)
      this.setState({ slideWasClicked: false })
    }
  }

  public handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.slideWasClicked) {
      const { startingMouseX } = this.state
      const currentMouseX = e.screenX
      const multiplier = 3
      const slideLength = this.calculateSlideLength()
      const startingPosition = slideLength * (this.props.currentSlide - 1)
      const pos =
        (currentMouseX - startingMouseX) * multiplier - startingPosition
      const max = slideLength * this.props.totalSlides
      const endingPos = slideLength * (this.props.totalSlides - 1)

      if (this.props.sliderIsMoving && this.slideContainer.current) {
        const { style } = this.slideContainer.current
        if (pos > 0) {
          style.transform = `translateX(${0})`
        } else if (pos < -endingPos) {
          style.transform = `translateX(${-endingPos}px)`
        } else {
          style.transform = `translateX(-${Math.abs(pos)}px)`
          this.calculateCurrentSlide(pos, max)
        }
      }
    }
  }

  public calculateCurrentSlide = (pos: number, totalLength: number) => {
    const { currentSlide } = this.state
    const lenghtOfOneSlide = totalLength / this.props.totalSlides
    const currentSlidePos = lenghtOfOneSlide * (currentSlide - 1)

    if (pos < -(currentSlidePos + lenghtOfOneSlide / 2)) {
      this.setState({
        currentSlide: this.state.currentSlide + 1
      })
    } else if (pos > -(currentSlidePos - lenghtOfOneSlide / 2)) {
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }

  public calculateEndSliderPos = (current: number) => {
    const totalLength = this.calculateSlideLength() * this.props.totalSlides
    const lenghtOfOneSlide = totalLength / this.props.totalSlides
    const currentSlidePos = lenghtOfOneSlide * (current - 1)
    if (this.slideContainer.current) {
      this.slideContainer.current.style.transform = `translateX(${-currentSlidePos}px)`
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
        onMouseDown={this.handleMouseDown}
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
