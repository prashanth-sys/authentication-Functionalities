import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
