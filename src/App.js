import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home/index'

import Signup from './components/SignUp/SignUP'

import NotFound from './components/NotFound'

import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/NotFound" component={NotFound} />

      <Route exact path="/Signup" component={Signup} />
      <Redirect to="/NotFound" />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
