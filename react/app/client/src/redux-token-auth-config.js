import { generateAuthActions } from 'redux-token-auth'
 
const config = {
  authUrl: "https://blooming-dawn-18533.herokuapp.com/auth",
  storage: {
    flushGetRequests: false
  },
  userAttributes: {
    email: 'email',
  },
  userRegistrationAttributes: {
  },
  //hasVerificationBeenAttempted: true,
}
 
const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)
 
export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}