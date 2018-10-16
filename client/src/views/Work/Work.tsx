import Slider from 'components/Slider'
import * as React from 'react'
import './work.css'

interface IProps {
  slides: any
  textures: any
}

class Work extends React.Component<IProps> {
  public render() {
    const { slides, textures } = this.props
    return (
      <div className="work page">
        <Slider slides={slides} textures={textures} />
      </div>
    )
  }
}

export default Work
