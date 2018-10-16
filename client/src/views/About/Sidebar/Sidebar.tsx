import * as React from 'react'
import Article from './Article'
import './sidebar.css'
import Startup from './Startup'

const Sidebar = () => (
  <div className="about-sidebar">
    <div className="content-wrapper">
      <h2 className="header">What I'm Up To</h2>
      <Article />
      <Article />
    </div>
    <div className="content-wrapper">
      <h2 className="header">Other Things I Do</h2>
      <Startup />
      <Startup />
      <Startup />
    </div>
  </div>
)

export default Sidebar
