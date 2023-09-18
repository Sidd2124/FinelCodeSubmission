import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home/index'

import Signup from './components/SignUp/SignUP'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/NotFound" component={NotFound} />

      <Route exact path="/Signup" component={Signup} />
      <Redirect to="/NotFound" />
    </Switch>
  </BrowserRouter>
)

export default App
