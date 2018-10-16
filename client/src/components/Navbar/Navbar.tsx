import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => (
  <div className="navbar">
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
    </div>
    <div className="right-col">
      <a href="https://codingnomadkit.com" target="blank">
        <img
          src={require('../../images/icons/cnk.png')}
          alt="Coding Nomad Kit"
        />
      </a>
    </div>
  </div>
)

export default Navbar
