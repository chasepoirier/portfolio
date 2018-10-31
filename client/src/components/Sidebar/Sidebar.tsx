import { toggleContactForm } from 'ducks/layout/operations'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
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
  toggleContact: typeof toggleContactForm
}

const Sidebar = ({ toggleContact }: Props) => (
  <div className="static-container">
    <div className="sidebar">
      {renderIcons()}
      <div className="divider" />
      <div onClick={() => toggleContact(true)} className="chat-btn">
        <div className="btn-text" />
      </div>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleContact: (toggle: boolean) => dispatch(toggleContactForm(toggle))
})

export default connect(
  null,
  mapDispatchToProps
)(Sidebar)
