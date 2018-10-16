// Components
import Contact from 'components/Contact'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
// defaults
import { History } from 'history'
import * as React from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import * as THREE from 'three'
import { introPageAnimation, outroPageAnimation } from 'utils/animations'
import getCurrentLocation from 'utils/getCurrentLocation'
import { About, Blog, CaseStudy, Home, Login, NotFound, Work } from 'views'
// Metadata
import sliderMetaData from '../data/sliderMetaData'

// utils

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fainstagram } from '@fortawesome/free-solid-svg-icons';

// library.add(fainstagram);

interface IProps extends RouteComponentProps {
  history: History
  location: History['location']
}

interface IState {
  loaded: boolean
  location: {
    city?: string
    code?: string
  }

  pageIsScrollable: boolean
  showContact: boolean
  sidebar: {
    positionIsFixed: boolean
  }
  slides: any
  textures: any
}

class App extends React.Component<IProps, IState> {
  public pageRef = React.createRef<HTMLDivElement>()

  public state = {
    loaded: false,
    location: {
      city: '',
      code: ''
    },

    pageIsScrollable: false,
    showContact: false,
    sidebar: {
      positionIsFixed: true
    },
    slides: [],
    textures: []
  }

  public componentWillMount() {
    const textures = sliderMetaData.map(slide => {
      return new THREE.TextureLoader().load(
        require(`../images/bg-imgs/${slide.img}.jpg`)
      )
    })
    this.setState({
      slides: sliderMetaData,
      textures
    })
    getCurrentLocation().then(location => {
      this.setState({ location, loaded: true })
    })
  }

  public componentDidUpdate(prevProps: any, prevState: IState) {
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
    const { slides, textures, location, pageIsScrollable } = this.state
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
                  render={() => <Work slides={slides} textures={textures} />}
                />
                <Route path="/case-studies/:id" render={() => <CaseStudy />} />
                <Route
                  path="/about"
                  render={() => (
                    <About
                      toggleScrollablePage={this.toggleScrollablePage}
                      location={location}
                    />
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

export default withRouter(App)
