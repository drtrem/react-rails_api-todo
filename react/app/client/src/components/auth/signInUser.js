// components/SignInScreen.jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../../redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module
 
class SignInScreen extends Component {

  constructor (props) { 
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
 
  submitForm (e) {
    e.preventDefault()
    const { history, signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    signInUser({ email, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then((response) => {console.log(response)})
      .catch((error) => {console.log(error)})
    history.push('/')
  }

 
  render () {
    return (
      <div className="col-lg-offset-2 col-lg-8">
        <div className='sign'><a href="/register" >Sign up </a></div>
        <h2>Sign in</h2>
        <form onSubmit={this.submitForm}>  
          <input className="input-project center-block"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email" required />
          <input className="input-project center-block"
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password" required />
          <button className="add center-block add-project">Sign in</button>
        </form>
      </div>
    )
  }
}

export default connect(null,{ signInUser })(SignInScreen)