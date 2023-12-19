// Write your JS code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  onClickToLogin = () => {}

  render() {
    return (
      <div className="bg-container">
        <h1>Please Login</h1>
        <button className="button" type="button" onClick={this.onClickToLogin}>
          Login with Simple Creds
        </button>
      </div>
    )
  }
}
export default Login
