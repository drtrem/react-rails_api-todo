import React, { Component } from 'react';
import SignOutUser from '../auth/signOutUser'

class Sign extends Component {

  render () {
    return (
      <div className='sign'>
        <SignOutUser />
      </div>
    )
  }
}

export default Sign;