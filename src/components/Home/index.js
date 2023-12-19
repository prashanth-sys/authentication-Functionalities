import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-container">
      <h1 className="main-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
