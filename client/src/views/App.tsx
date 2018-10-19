// Components
import Contact from 'components/Contact'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { adminOperations } from 'ducks/admin'
import { sliderOperations } from 'ducks/slider'
// defaults
import { History } from 'history'
import { AppState } from 'modules/utils/types'
import * as React from 'react'
import { connect } from 'react-redux'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { introPageAnimation, outroPageAnimation } from 'utils/animations'
import getIPAddress from 'utils/fetchIP'
import setAuthHeaders from 'utils/setAuthHeaders'
import { About, Blog, CaseStudy, Home, Login, NotFound, Work } from 'views'

interface Props extends RouteComponentProps {
  history: History
  location: History['location']
  slides: AppState['slider']['slides']
  getCurrentLocation: typeof adminOperations.getCurrentLocation
  loadTextures: typeof sliderOperations.loadTextures
}

interface State {
  loaded: boolean
  pageIsScrollable: boolean
  showContact: boolean
  sidebar: {
    positionIsFixed: boolean
  }
  textures: any
}

class App extends React.Component<Props, State> {
  public pageRef = React.createRef<HTMLDivElement>()

  public state = {
    loaded: false,
    pageIsScrollable: false,
    showContact: false,
    sidebar: {
      positionIsFixed: true
    },
    textures: []
  }

  public componentWillMount() {
    const { getCurrentLocation, loadTextures, slides } = this.props
    setAuthHeaders(localStorage.getItem('token'))
    getIPAddress().then((ref: any) => getCurrentLocation(ref.ip))
    loadTextures(slides)
  }

  public componentDidUpdate(prevProps: any, prevState: State) {
    if (
      prevState.showContact !== this.state.showContact &&
      this.pageRef.current
    ) {
      this.pageRef.current.style.transform = this.movePage()
    }
  }

  public toggleScrollablePage = (toggle: boolean) => {
    this.setState({ pageIsScrollable: toggle })
  }

  public toggleContactForm = (toggle: boolean) => {
    this.setState({ showContact: toggle })
  }

  public movePage = () => {
    if (this.state.showContact) {
      const contact = document.querySelector('.contact')
      if (contact) {
        return `translateY(-${contact.clientHeight}px)`
      }
      return `translateY(0px)`
    } else {
      return `translateY(0px)`
    }
  }

  public render() {
    const { pageIsScrollable } = this.state
    return (
      <div className="App">
        <div
          className={pageIsScrollable ? 'main-page' : 'main-page'}
          ref={this.pageRef}
        >
          <Navbar />
          <TransitionGroup className="transition-wrapper">
            {!pageIsScrollable ? (
              <Sidebar
                toggleContactForm={this.toggleContactForm}
                display={true}
                fixed={false}
              />
            ) : (
              <Sidebar
                toggleContactForm={this.toggleContactForm}
                display={false}
                fixed={true}
              />
            )}
            <CSSTransition
              key={this.props.location.key}
              classNames="fade"
              timeout={500}
              appear={true}
              onEnter={node => introPageAnimation(node)}
              onExit={node => outroPageAnimation(node)}
            >
              <Switch location={this.props.location}>
                <Route exact={true} path="/" render={() => <Home />} />
                <Route
                  exact={true}
                  path="/case-studies"
                  render={() => <Work />}
                />
                <Route path="/case-studies/:id" render={() => <CaseStudy />} />
                <Route
                  path="/about"
                  render={() => (
                    <About toggleScrollablePage={this.toggleScrollablePage} />
                  )}
                />
                <Route path="/blog" render={() => <Blog />} />
                <Route path="/admin/login" render={() => <Login />} />
                <Route render={() => <NotFound />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        {!pageIsScrollable && (
          <Contact
            toggleContactForm={this.toggleContactForm}
            scrollable={false}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  slides: state.slider.slides
})

export default connect(
  mapStateToProps,
  {
    getCurrentLocation: adminOperations.getCurrentLocation,
    loadTextures: sliderOperations.loadTextures
  }
)(withRouter(App))
