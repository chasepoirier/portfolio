import Slider from 'components/Slider'
import * as React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from 'src/types/redux'
import './work.css'

interface Props {
  slides: ReduxState['slider']['slides']
  textures: ReduxState['slider']['textures']
}

class Work extends React.Component<Props> {
  public render() {
    const { slides, textures } = this.props
    return (
      <div className="work page">
        <div className="slider-wrapper">
          <Slider slides={slides} textures={textures} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  slides: state.slider.slides,
  textures: state.slider.textures
})

export default connect(mapStateToProps)(Work)
