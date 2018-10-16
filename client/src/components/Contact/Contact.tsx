import * as React from 'react'

import './contact.css'

interface IState {
  form: {
    name: string
    email: string
    message: string
  }
}

interface IProps {
  scrollable: any
  toggleContactForm: any
}

class Contact extends React.Component<IProps, IState> {
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

  public handleFormSubmit = () => {
    // tslint:disable:no-console
    console.log('submitted form', this.state.form)
  }

  public render() {
    const { name, email, message } = this.state.form
    return (
      <div className={this.props.scrollable ? 'contact scrollable' : 'contact'}>
        <div className="page-wrapper">
          <div className="close-container">
            <div
              onClick={() => this.props.toggleContactForm(false)}
              className="close"
            />
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
              <div onClick={this.handleFormSubmit} className="submit-btn">
                Get in Touch
              </div>
            </div>
          </div>
          <div className="copyright">© 2018 All Rights Reserved</div>
        </div>
      </div>
    )
  }
}

export default Contact
