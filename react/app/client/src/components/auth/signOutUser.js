// components/SiteHeader.jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../../redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module
 
class SignOutUser extends Component {
  constructor (props) { 
    super(props)
    this.signOut = this.signOut.bind(this)
  }
 
  signOut (e) {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser() // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then((response) => {console.log(response)})
      .catch((error) => {console.log(error)})
  }
 
  render () {
    const { signOut } = this
    return (
      <a href="" onClick={signOut}>Sign Out</a>
    )
  }
}
 
export default connect(
  null,
  { signOutUser },
)(SignOutUser)