import Contact from 'components/Contact'
import * as React from 'react'
import './about.css'
import ContentContainer from './ContentContainer'
import Sidebar from './Sidebar'

interface IProps {
  location: {
    city: string
    code: string
  }
  toggleScrollablePage: (toggle: boolean) => void
}

class About extends React.Component<IProps> {
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

export default About
