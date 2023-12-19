// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onClickShow = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <div>
      <button className="button" type="button" onClick={onClickShow}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
