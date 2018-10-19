import { sliderOperations } from 'ducks/slider'
import { AppState } from 'modules/utils/types'
import * as React from 'react'
import { connect } from 'react-redux'
import { slideTransitionAnimation } from 'utils/animations'

// components
import Slide from './Slide'
import SliderControls from './SliderControls'
import SlideWrapper from './SlideWrapper'

// utils
import { Texture } from 'three'
import './slider.css'

interface State {
  canScroll: boolean
}

interface Props {
  slides: any
  textures: Texture[]
  slider: AppState['slider']
  resetSlider: typeof sliderOperations.resetSlider
  updateCurrentSlide: typeof sliderOperations.updateCurrentSlide
  updatePercentTraveled: typeof sliderOperations.updatePercentTraveled
}

class Slider extends React.Component<Props, State> {
  public state = {
    canScroll: true
  }

  public boundScroll = () => this.onscroll.bind(this)

  public componentDidMount() {
    window.addEventListener('wheel', this.boundScroll)
  }

  public componentWillUnmount() {
    window.removeEventListener('wheel', this.boundScroll)
    this.props.resetSlider()
  }

  public onscroll = (e: any) => {
    const scroll = e.deltaY

    if (scroll > 55 || scroll < -55) {
      if (scroll < 0 && this.state.canScroll) {
        this.countDown()
        this.setState({ canScroll: false })
        setTimeout(() => this.setState({ canScroll: true }), 900)
        slideTransitionAnimation(1)
      } else if (scroll > 0 && this.state.canScroll) {
        this.countUp()
        this.setState({ canScroll: false })
        setTimeout(() => this.setState({ canScroll: true }), 900)
        slideTransitionAnimation(1)
      }
    }
  }

  public countUp = () => {
    const {
      updatePercentTraveled,
      updateCurrentSlide,
      slider: { currentSlide }
    } = this.props
    if (currentSlide === this.props.slides.length) {
      updateCurrentSlide(1)
      updatePercentTraveled(0)
    } else {
      updateCurrentSlide(currentSlide + 1)
      updatePercentTraveled(this.setPercentTraveled(currentSlide))
    }
  }

  public countDown = () => {
    const {
      updatePercentTraveled,
      updateCurrentSlide,
      slider: { currentSlide }
    } = this.props
    if (currentSlide === 1) {
      updateCurrentSlide(this.props.slides.length)
      updatePercentTraveled(100)
    } else {
      updateCurrentSlide(currentSlide - 1)
      updatePercentTraveled(this.setPercentTraveled(currentSlide - 2))
    }
  }

  public setCurrentSlide = (slide: number, expanding: boolean) => {
    const { updatePercentTraveled, updateCurrentSlide } = this.props
    updateCurrentSlide(slide)
    updatePercentTraveled(this.setPercentTraveled(slide - 1))
    // wait 1 ms until for state to reset before transitioning
    if (!expanding) {
      setTimeout(() => slideTransitionAnimation(slide), 1)
    }
  }

  public setPercentTraveled = (slide: any) =>
    (slide / (this.props.slides.length - 1)) * 100

  public renderSlides = () => {
    return this.props.slides.map((slide: any, index: number) => {
      return (
        <Slide
          key={slide.title}
          id={index + 1}
          current={this.props.slider.currentSlide}
          slide={slide}
          texture={this.props.textures[index]}
        />
      )
    })
  }

  public render() {
    return (
      <div className="slider">
        <SlideWrapper totalSlides={this.props.slides.length}>
          {this.renderSlides()}
        </SlideWrapper>

        <SliderControls
          setCurrentSlide={this.setCurrentSlide}
          totalSlides={this.props.slides.length}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  slider: state.slider
})

export default connect(
  mapStateToProps,
  {
    resetSlider: sliderOperations.resetSlider,
    updateCurrentSlide: sliderOperations.updateCurrentSlide,
    updatePercentTraveled: sliderOperations.updatePercentTraveled
  }
)(Slider)
