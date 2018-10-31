import * as React from 'react'
import './startup.css'

interface Props {
  image: string
  title: string
  desc: string
}

const Startup = ({ image, title, desc }: Props) => (
  <div className="startup">
    <div className="icon-container">
      <img src={image} alt="icon" />
    </div>
    <div className="text-container">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  </div>
)

export default Startup
