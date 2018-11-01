import * as React from 'react'
import './startup.css'

interface Props {
  image: string
  title: string
  desc: string
  url: string
}

const Startup = ({ image, title, desc, url }: Props) => (
  <div className="startup">
    <div className="icon-container">
      <img src={image} alt="icon" />
    </div>
    <div className="text-container">
      <a target="blank" href={url}>
        <div className="title">{title}</div>
      </a>
      <div className="desc">{desc}</div>
    </div>
  </div>
)

export default Startup
