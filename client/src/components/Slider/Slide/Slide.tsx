import * as React from 'react'
// import { Link } from "react-router-dom";

import Canvas from 'utils/webGL'

import './slide.css'

interface State {
  image: string
}

interface Props {
  texture: string
  current: number
  id: any
  slide: any
}

class Slide extends React.Component<Props, State> {
  private boundResizeCanvas: any
  private boundMouseMove: any
  private canvas: any
  private canvasRef = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.state = {
      image: ''
    }
    this.boundResizeCanvas = this.resizeCanvas.bind(this)
    this.boundMouseMove = this.mouseMove.bind(this)
  }

  public componentDidMount() {
    this.canvas = new Canvas(this.props.texture)
    this.canvas.initCanvas(this.canvasRef.current)
    setTimeout(() => {
      this.canvas.startAnimation()
      // this.canvas.stopAnimation();
    }, 250)
    window.addEventListener('resize', this.boundResizeCanvas)
    window.addEventListener('mousemove', this.boundMouseMove)

    // this.refs.mainImg.complete && this.imageLoaded
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.canvas !== null) {
      if (
        prevProps.current !== this.props.current &&
        this.props.current === this.props.id
      ) {
        this.canvas.startAnimation()
      } else if (this.props.current !== this.props.id) {
        this.canvas.stopAnimation()
      }
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.boundResizeCanvas)
    window.removeEventListener('mousemove', this.boundMouseMove)
  }

  public resizeCanvas = () => {
    if (this.canvasRef.current) {
      const { clientHeight, clientWidth } = this.canvasRef.current

      this.canvas.resize(clientWidth, clientHeight)
    }
  }

  public mouseMove = (e: any) => {
    // if(e.target.nodeName.toLowerCase() === 'canvas') {
    if (this.canvas) {
      // this.canvas.onMouseMove(e)
    }
    // }
  }

  public imageLoaded = () => {
    // this.props.set
  }

  public render() {
    const { current, id, slide } = this.props
    return (
      <li className={current === id ? 'slide current' : 'slide not-current'}>
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
                <a className="not-draggable" href={slide.link} target="blank">
                  Explore
                </a>
              ) : (
                <div className="explore">Link coming soon</div>
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
                onLoad={this.imageLoaded}
              />
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default Slide
