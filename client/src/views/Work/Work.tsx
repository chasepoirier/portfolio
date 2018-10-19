import Slider from 'components/Slider'
import { AppState } from 'modules/utils/types'
import * as React from 'react'
import { connect } from 'react-redux'
import './work.css'

interface Props {
  slides: AppState['slider']['slides']
  textures: AppState['slider']['textures']
}

class Work extends React.Component<Props> {
  public render() {
    const { slides, textures } = this.props
    return (
      <div className="work page">
        <Slider slides={slides} textures={textures} />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  slides: state.slider.slides,
  textures: state.slider.textures
})

export default connect(mapStateToProps)(Work)
