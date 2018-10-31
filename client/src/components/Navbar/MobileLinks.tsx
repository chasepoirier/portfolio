// import { toggleMobileNav } from 'ducks/layout/operations'
import { toggleContactForm, toggleMobileNav } from 'ducks/layout/operations'
import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ReduxState } from 'src/types/redux'

interface Props {
  menu: ReduxState['layout']['mobile']['menu']
  toggleMenu: typeof toggleMobileNav
  toggleContactForm: typeof toggleContactForm
}

class MobileLinks extends React.Component<Props> {
  public handleContactClicked = () => {
    this.props.toggleMenu(false)
    this.props.toggleContactForm(true)
  }

  public render() {
    const { menu, toggleMenu } = this.props
    return (
      <div className={menu.active ? 'mobile-links active' : 'mobile-links'}>
        <div className="link-wrapper">
          <NavLink
            onClick={() => toggleMenu(false)}
            className="link"
            to="/case-studies"
          >
            Work
          </NavLink>
          <NavLink
            onClick={() => toggleMenu(false)}
            className="link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => toggleMenu(false)}
            className="link"
            to="/blog"
          >
            Blog
          </NavLink>
          <div
            onClick={this.handleContactClicked}
            className="link contact-link"
          >
            Contact
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleContactForm: (toggle: boolean) => dispatch(toggleContactForm(toggle)),
  toggleMenu: (toggle: boolean) => dispatch(toggleMobileNav(toggle))
})

export default connect(
  null,
  mapDispatchToProps
)(MobileLinks)
