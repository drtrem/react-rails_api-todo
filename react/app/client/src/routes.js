import * as React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App'
import SignInPage from './components/auth/signInUser'
import RegisterUser from './components/auth/registerUser'
import { generateRequireSignInWrapper } from 'redux-token-auth'
 
const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/signin',
})
 
const history = createBrowserHistory({})
 
const Routes = () => (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={requireSignIn(App)} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/register" component={RegisterUser} />
    </div>
  </Router>
)

export default Routes;