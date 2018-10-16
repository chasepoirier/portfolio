import * as React from 'react'
import { Link } from 'react-router-dom'

import './home.css'

const Home = () => (
  <div className="home page">
    <div className="content-container">
      <div className="header-text">
        <div className="overlay" />
        <h1>UX Designer & Full-stack Developer</h1>
      </div>
      <h2>
        <span>Three years experience in the freelance industry focused on</span>
        <span> building websites & apps that grow your business.</span>
      </h2>
      <Link to="/case-studies">Explore Projects</Link>
    </div>
  </div>
)

export default Home
