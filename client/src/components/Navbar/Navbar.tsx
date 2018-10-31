import { toggleContactForm } from 'ducks/layout/operations'
import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ReduxState } from 'src/types/redux'
import MobileLinks from './MobileLinks'
import MobileNav from './MobileNav'
import './navbar.css'

interface Props {
  menu: ReduxState['layout']['mobile']['menu']
  toggleContact: typeof toggleContactForm
}

const Navbar = ({ toggleContact, menu }: Props) => (
  <div
    className={menu.active ? 'nav-container mobile-active' : 'nav-container'}
  >
    <div className="navbar">
      <MobileLinks menu={menu} />
      <div className="left-col">
        <NavLink to="/">Chase Poirier</NavLink>
      </div>
      <div className="center-col">
        <NavLink activeClassName="active" to="/case-studies">
          Work
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/blog">
          Blog
        </NavLink>
        <div onClick={() => toggleContact(true)} className="contact-link">
          Contact
        </div>
      </div>
      <div className="right-col">
        <a href="https://codingnomadkit.com" target="blank">
          <img
            src={require('../../images/icons/cnk.png')}
            alt="Coding Nomad Kit"
          />
        </a>
      </div>
      <MobileNav />
    </div>
  </div>
)

const mapStateToProps = (state: ReduxState) => ({
  menu: state.layout.mobile.menu
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleContact: (toggle: boolean) => dispatch(toggleContactForm(toggle))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
