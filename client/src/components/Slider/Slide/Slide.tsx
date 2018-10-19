import * as React from 'react'
// import { Link } from "react-router-dom";
import Canvas from 'utils/webGL'

import { Texture } from 'three'
import './slide.css'

interface Props {
  texture: Texture
  current: number
  id: number
  slide: any
}

class Slide extends React.Component<Props> {
  private boundResizeCanvas: any
  private canvas: Canvas
  private canvasRef = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.boundResizeCanvas = this.resizeCanvas.bind(this)
  }

  public componentDidMount() {
    /**
     * Delay initializing of canvas until outro
     * animation of previous page is finished
     */
    setTimeout(() => {
      this.canvas = new Canvas(this.props.texture, this.props.id)
      this.canvas.initCanvas(this.canvasRef.current)

      if (this.props.current === this.props.id) {
        this.canvas.startAnimation('')
      }
    }, 260)
    window.addEventListener('resize', this.boundResizeCanvas)
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.canvas !== null && prevProps.current !== this.props.current) {
      if (this.props.current === this.props.id) {
        this.canvas.startAnimation('')
      } else if (this.props.current !== this.props.id) {
        this.canvas.stopAnimation()
      }
    }
  }

  public componentWillUnmount() {
    this.canvas.stopAnimation()
    window.removeEventListener('resize', this.boundResizeCanvas)
  }

  public resizeCanvas = () => {
    if (this.canvasRef.current) {
      const { clientHeight, clientWidth } = this.canvasRef.current

      this.canvas.resize(clientWidth, clientHeight)
    }
  }

  public render() {
    const { current, id, slide } = this.props
    return (
      <li
        className={current === id ? 'slide current' : 'slide not-current'}
        id={`slide-${id}`}
      >
        <div className="content-container">
          <div className="left-col">
            <div className="count-container">
              <div className="slide-count">{`0${id}`}</div>
            </div>
            <div className="text-container">
              <div className="title-container">
                <h3>{slide.title}</h3>
                <span />
              </div>
              <h4>{slide.desc}</h4>
              {slide.link ? (
                <a
                  className="not-draggable link"
                  href={slide.link}
                  target="blank"
                >
                  Explore
                </a>
              ) : (
                <div className="explore link">Link coming soon</div>
              )}
              {/*
							Eventual link when case studies are added
							<Link className="not-draggable" to={`/case-studies/${slide.title.replace(' ', '-').toLowerCase()}`}>
								Explore
							</Link> */}
            </div>
          </div>
          <div className="right-col">
            <div className="bg-img">
              <div className="overlay" />
              <div className="canvas" ref={this.canvasRef} />
              {/* <img src={require(`../../../images/bg-imgs/${slide.img}`)} alt={slide.title}/> */}
            </div>
            <div className={id === 1 ? 'main-img phone' : 'main-img'}>
              <img
                draggable={false}
                src={require(`../../../images/mockups/${slide.img}.png`)}
                alt={slide.title}
              />
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default Slide
