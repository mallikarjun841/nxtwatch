import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Contextdata from '../../Context/Context'
import './index.css'

class LoginRoute extends Component {
  state = {username: '', password: '', error: '', showpassword: 'password'}

  getdetailspage = data => {
    const {history} = this.props

    Cookies.set('jwt_token', data, {expires: 30})
    history.replace('/')
  }

  onsubmitform = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const responsedata = await response.json()

    console.log(responsedata)

    if (response.ok) {
      this.getdetailspage(responsedata.jwt_token)
    } else {
      console.log(responsedata)
      this.setState({error: responsedata.error_msg})
    }
  }

  usernamechange = event => {
    this.setState({username: event.target.value})
  }

  passwordchange = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  makevisiblepassword = event => {
    if (event.target.checked) {
      this.setState({showpassword: 'text'})
    } else {
      this.setState({showpassword: 'password'})
    }
  }

  loginroute = () => {
    const {error, showpassword} = this.state
    return (
      <div className="cardcontainer shadow">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          alt="website logo"
        />
        <form onSubmit={this.onsubmitform} className="carddetailscontainer">
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <input
            onChange={this.usernamechange}
            className="input"
            placeholder="username"
            id="username"
            type="text"
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            onChange={this.passwordchange}
            className="input"
            placeholder="password"
            id="password"
            type={showpassword}
          />

          <div className="showpasswordcontainer">
            <input
              className="showinput"
              id="show"
              onChange={this.makevisiblepassword}
              type="checkbox"
            />
            <label className="showinputlabel" htmlFor="show">
              Show password
            </label>
          </div>
          <button className="loginbutton" type="submit">
            Login
          </button>
        </form>
        <p className="error">{error}</p>
      </div>
    )
  }

  render() {
    const {error, showpassword} = this.state
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Contextdata.Consumer>
        {value => {
          const {status} = value
          return (
            <>
              {status ? (
                <div className="Logincontainer darkmode">
                  {this.loginroute()}
                </div>
              ) : (
                <div className="Logincontainer lightmode">
                  {this.loginroute()}
                </div>
              )}
            </>
          )
        }}
      </Contextdata.Consumer>
    )
  }
}
export default LoginRoute
