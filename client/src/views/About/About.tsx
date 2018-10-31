import * as React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from 'src/types/redux'
import './about.css'
import ContentContainer from './ContentContainer'
import Sidebar from './Sidebar'

interface Props {
  location: ReduxState['admin']['location']
}

class About extends React.Component<Props> {
  public render() {
    return (
      <div className="page about">
        <div className="page-wrapper flex-wrapper">
          <ContentContainer location={this.props.location} />
          <Sidebar />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  location: state.admin.location
})

export default connect(mapStateToProps)(About)
