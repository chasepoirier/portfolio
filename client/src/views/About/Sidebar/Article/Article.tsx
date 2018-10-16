import * as React from 'react'
import { Link } from 'react-router-dom'
import './article.css'

const Article = () => (
  <div className="article">
    <Link to="articles">
      <div className="image-container">
        <img src="null" alt="article" />
        <div className="category">Design</div>
      </div>
      <div className="title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit add some text
        here ya dork…
      </div>
    </Link>
  </div>
)

export default Article
