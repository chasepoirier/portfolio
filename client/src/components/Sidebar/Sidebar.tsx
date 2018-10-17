import * as React from 'react'
import './sidebar.css'

const icons = [
  {
    icon: 'linkedin.png',
    url: 'https://www.linkedin.com/in/chase-poirier-60898096/'
  },
  {
    icon: 'insta.png',
    url: 'https://www.instagram.com/poirierchase/'
  },
  {
    icon: 'dribbble-ball-mark.png',
    url: 'https://dribbble.com/chasepoirier'
  }
]

const renderIcons = () => {
  return icons.map(icon => {
    return <Icon key={icon.icon} icon={icon} />
  })
}

const Icon = ({ icon }: { icon: any }) => (
  <a target="blank" href={icon.url} className="icon">
    <img src={require(`../../images/icons/${icon.icon}`)} alt={icon.icon} />
  </a>
)

interface Props {
  toggleContactForm: any
  fixed: any
  display: any
}

const Sidebar = ({ toggleContactForm, fixed, display }: Props) => (
  <div className={display ? 'static-container' : 'none'}>
    <div className="sidebar">
      {renderIcons()}
      <div className="divider" />
      <div onClick={() => toggleContactForm(true)} className="chat-btn">
        <div className="btn-text" />
      </div>
    </div>
  </div>
)

export default Sidebar
