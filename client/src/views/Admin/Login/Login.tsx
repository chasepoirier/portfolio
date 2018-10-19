import axios from 'axios'
import { History } from 'history'
import * as React from 'react'
// import { connect } from 'react-redux';
// import { login } from "../../actions/Auth";
import { RouteComponentProps, withRouter } from 'react-router-dom'
import setAuthorizationHeader from 'utils/setAuthHeaders'

import './login.css'

interface Props extends RouteComponentProps<{}> {
  history: History
}

interface State {
  data: {
    email: string
    password: string
  }
  loading: boolean
  errors: string
}

class Login extends React.Component<Props, State> {
  public state = {
    data: {
      email: '',
      password: ''
    },
    errors: '',
    loading: false
  }

  public submit = (data: State['data']) => {
    return axios.post('/api/admin/login', data).then(res => {
      if (res.data.user) {
        localStorage.setItem('token', res.data.user.token)
        setAuthorizationHeader(res.data.user.token)
        this.props.history.push('/')
      } else {
        // console.log('no')
      }
    })
  }

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })

  public onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.setState({ loading: true })
    this.submit(this.state.data).catch(
      err =>
        // tslint:disable:no-console
        console.log(err)
      // this.setState({ errors: err.response.data.errors, loading: false })
    )
  }

  public render() {
    return (
      <div className="login-page">
        <div className="content-container">
          <div className="tagline">Sign in to start tracking this computer</div>
          <form id="signup" onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              className="input"
              type="text"
              placeholder="Email"
              name="email"
            />

            <input
              onChange={this.onChange}
              className="input"
              type="password"
              placeholder="Password"
              name="password"
            />

            <input
              onChange={this.onChange}
              type="submit"
              value="LOGIN"
              className="input-button"
            />
          </form>
        </div>
      </div>
    )
  }
}

// const connectWrapper = connect(null, { login })(Login);

export default withRouter(Login)
