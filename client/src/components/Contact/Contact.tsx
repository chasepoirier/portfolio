import * as React from 'react'

import { toggleContactForm } from 'ducks/layout/operations'
import { resetEmailState, sendEmailRequest } from 'ducks/mail/operations'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ReduxState } from 'src/types/redux'
import './contact.css'

interface State {
  form: {
    name: string
    email: string
    message: string
  }
}

interface Props {
  contact: ReduxState['mail']['contact']
  toggleContactForm: typeof toggleContactForm
  sendEmail: (data: ContactBody) => Promise<{}>
  resetEmailState: () => void
}

class Contact extends React.Component<Props, State> {
  public state = {
    form: {
      email: '',
      message: '',
      name: ''
    }
  }

  public onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  public handleCloseClick = () => {
    this.props.toggleContactForm(false)
    this.resetEmailState()
  }

  public handleFormSubmit = () => {
    this.props.sendEmail(this.state.form)
  }

  public resetEmailState = () => {
    setTimeout(() => {
      this.setState({
        ...this.state,
        form: {
          email: '',
          message: '',
          name: ''
        }
      })
      this.props.resetEmailState()
    }, 500)
  }

  public render() {
    const { name, email, message } = this.state.form
    const { contact } = this.props
    return (
      <div className="contact">
        <div className="page-wrapper">
          <div className="close-container">
            <div onClick={this.handleCloseClick} className="close" />
          </div>
          <div className="content-container">
            <div className="one-col">
              <div className="footer-title">
                Let's collaborate on something awesome.
              </div>
              <img
                src={require('../../images/signature.png')}
                alt="signature"
              />
            </div>
            <div className="two-col">
              <div className="input-flex-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={this.onChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <div className="input-container">
                <textarea
                  name="message"
                  rows={1}
                  placeholder="Tell me about your project"
                  value={message}
                  onChange={this.onChange}
                />
              </div>
              {contact.error && contact.error}
              <div onClick={this.handleFormSubmit} className="submit-btn">
                {this.calculateButtonText()}
              </div>
            </div>
          </div>
          <div className="copyright">© 2018 All Rights Reserved</div>
        </div>
      </div>
    )
  }

  private calculateButtonText = () => {
    const { contact } = this.props
    if (contact.submitting) {
      return 'Sending...'
    }
    if (contact.result) {
      return 'Message Sent'
    }
    return 'Get in Touch'
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetEmailState: () => dispatch(resetEmailState()),
  sendEmail: (data: ContactBody) => sendEmailRequest(data)(dispatch),
  toggleContactForm: (toggle: boolean) => dispatch(toggleContactForm(toggle))
})

const mapStateToProps = (state: ReduxState) => ({
  contact: state.mail.contact,
  layout: state.layout
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
