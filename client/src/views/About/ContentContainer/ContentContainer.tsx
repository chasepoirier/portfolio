import { AppState } from 'modules/utils/types'
import * as React from 'react'
import './content-container.css'

const icons = {
  dribble: 'https://dribbble.com/chasepoirier',
  insta: 'https://www.instagram.com/poirierchase/',
  linkedin: 'https://www.linkedin.com/in/chase-poirier-60898096/'
}

interface Props {
  location: AppState['admin']['location']
}

const ContentContainer = ({ location }: Props) => (
  <div className="main-container">
    <h3 className="header">Hey, I'm Chase.</h3>
    <img src={require('../../../images/me.jpg')} alt="it's me" />
    <div className="sub-header-wrapper">
      <div className="location">
        {location.loading
          ? `finding Chase...`
          : `Current Location: ${location.data.city}, ${location.data.code}`}
      </div>
      <div className="social">
        <a href={icons.linkedin} target="blank">
          <i className="fab fa-linkedin" />
        </a>
        <a href={icons.insta} target="blank">
          <i className="fab fa-instagram" />
        </a>
        <a href={icons.dribble} target="blank">
          <i className="fab fa-dribbble" />
        </a>
      </div>
    </div>
    <div className="text">
      Looking to bring your new idea for a software platform to life? Or take
      your existing project to the next level so that it brings in more
      business?
      <br />
      <br />
      In today's day and age it can be a daunting task to determine how you want
      to build your product and often times choosing the wrong path can lead you
      down a time wasting and expensive rabbit hole.
      <br />
      <br />
      That's why I've dedicated my time to staying on top of the latest
      technology and design trends so that the products I build are well
      documented, clean, and powerful. My goal is to build your software
      platform the right way, the first time, so that you can focus on doing
      what you do best, growing your business.
      <br />
      <br />
      <strong>My specialties are:</strong>
      <ul>
        <li>
          Designing great user experiences that keep customers coming back to
          your platform
        </li>
        <li>
          Bringing a user-centered design approach to your software development
          process
        </li>
        <li>
          Writing clean, well-documented code that is easily understood by other
          developers
        </li>
        <li>
          Architecting a codebase that can scale seamlessly with your user
          growth
        </li>
        <li>
          And of course, bringing a fun & passionate personality to your team
        </li>
      </ul>
      <br />
      <strong>The technologies that I currently use are:</strong>
      <ul>
        <li>HTML / CSS</li>
        <li>Javascript / Typescript</li>
        <li>React / Redux / Angular</li>
        <li>React Native / Ionic</li>
        <li>Express / Node</li>
        <li>MongoDB / Firebase</li>
      </ul>
      <br />
      I'm just as excited as your are to launch an awesome new technology
      product into the world so...
      <br />
      <br />
      Let's collaborate on something awesome.
    </div>
  </div>
)

export default ContentContainer
