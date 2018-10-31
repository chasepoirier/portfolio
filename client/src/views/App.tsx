// Components
import Contact from 'components/Contact'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { adminOperations } from 'ducks/admin'
import { sliderOperations } from 'ducks/slider'
// defaults
import { History } from 'history'
import * as React from 'react'
import { connect } from 'react-redux'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ReduxState } from 'src/types/redux'
import { introPageAnimation, outroPageAnimation } from 'utils/animations'
import getIPAddress from 'utils/fetchIP'
import setAuthHeaders from 'utils/setAuthHeaders'
import { About, Blog, CaseStudy, Home, Login, NotFound, Work } from 'views'

interface Props extends RouteComponentProps {
  history: History
  layout: ReduxState['layout']
  location: History['location']
  slides: ReduxState['slider']['slides']
  getCurrentLocation: typeof adminOperations.getCurrentLocation
  loadTextures: typeof sliderOperations.loadTextures
}

class App extends React.Component<Props> {
  public pageRef = React.createRef<HTMLDivElement>()

  public componentWillMount() {
    const { getCurrentLocation, loadTextures, slides } = this.props
    setAuthHeaders(localStorage.getItem('token'))
    getIPAddress().then((ref: any) => getCurrentLocation(ref.ip))
    loadTextures(slides)
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.layout.contact.active !== this.props.layout.contact.active) {
      this.movePage(this.props.layout.contact.active)
    }
  }

  public movePage = (contactVisible: boolean) => {
    const contact = document.querySelector('.contact')
    const body = this.pageRef.current
    if (body && contact) {
      if (contactVisible) {
        body.style.transform = `translateY(-${contact.clientHeight}px)`
      } else {
        body.style.transform = `translateY(0)`
      }
    }
  }

  public render() {
    return (
      <div className="App">
        <div className="main-page" ref={this.pageRef}>
          <Navbar />
          <div className="transition-wrapper">
            {this.renderSidebar()}
            <TransitionGroup>
              <CSSTransition
                key={this.props.location.key}
                classNames="fade"
                timeout={500}
                appear={true}
                onEnter={node => introPageAnimation(node)}
                onExit={node => outroPageAnimation(node)}
              >
                <Switch location={this.props.location}>
                  <Route exact={true} path="/" component={Home} />
                  <Route exact={true} path="/case-studies" component={Work} />
                  <Route path="/case-studies/:id" component={CaseStudy} />
                  <Route path="/about" component={About} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/admin/login" component={Login} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <Contact />
      </div>
    )
  }

  private renderSidebar = () => {
    const { pathname } = this.props.history.location
    // tslint:disable:no-console
    console.log(pathname)
    if (pathname === '/' || pathname === '/case-studies') {
      return <Sidebar />
    }
    return null
  }
}

const mapStateToProps = (state: ReduxState) => ({
  layout: state.layout,
  slides: state.slider.slides
})

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCurrentLocation: adminOperations.getCurrentLocation,
      loadTextures: sliderOperations.loadTextures
    }
  )(App)
)
