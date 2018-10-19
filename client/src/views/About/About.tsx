import Contact from 'components/Contact'
import { AppState } from 'modules/utils/types'
import * as React from 'react'
import { connect } from 'react-redux'
import './about.css'
import ContentContainer from './ContentContainer'
import Sidebar from './Sidebar'

interface Props {
  location: AppState['admin']['location']
  toggleScrollablePage: (toggle: boolean) => void
}

class About extends React.Component<Props> {
  public componentWillMount() {
    this.props.toggleScrollablePage(true)
  }

  public componentWillUnmount() {
    this.props.toggleScrollablePage(false)
  }

  public render() {
    return (
      <div className="page about">
        <div className="page-wrapper flex-wrapper">
          <ContentContainer location={this.props.location} />
          <Sidebar />
        </div>
        <Contact
          scrollable={true}
          toggleContactForm={this.props.toggleScrollablePage}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.admin.location
})

export default connect(mapStateToProps)(About)
