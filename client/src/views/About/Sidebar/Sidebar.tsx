import cnk from 'images/icons/cnk-circle.png'
import rt from 'images/icons/risingtalent.png'
import udio from 'images/icons/udio.png'
import * as React from 'react'
import './sidebar.css'
import Startup from './Startup'

const Sidebar = () => (
  <div className="about-sidebar">
    <div className="content-wrapper">
      <h2 className="header">What I'm Up To</h2>
      <div style={{ marginBottom: 50 }}>Blog coming soon</div>
    </div>
    <div className="content-wrapper">
      <h2 style={{ marginBottom: 30 }} className="header">
        Other Things I Do
      </h2>
      {Startups.map((s: Startup) => (
        <Startup url={s.url} title={s.title} image={s.image} desc={s.desc} />
      ))}
    </div>
  </div>
)

export default Sidebar

interface Startup {
  desc: string
  image: string
  title: string
  url: string
}

const Startups: Startup[] = [
  {
    desc: 'Teaching developers how to build a freelance business.',
    image: cnk,
    title: 'Coding Nomad Kit',
    url: 'https://codingnomadkit.com'
  },
  {
    desc: 'A startup studio for early stage businesses',
    image: udio,
    title: 'Udio Ventures',
    url: 'https://udioventures.com'
  },
  {
    desc: 'Helping connect freelancers to long-term clients',
    image: rt,
    title: 'Rising Talent',
    url: 'http://www.madisonyocum.com/projects/ripple'
  }
]
