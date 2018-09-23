import { generateAuthActions } from 'redux-token-auth'
 
const config = {
  authUrl: "http://localhost:3000/api/v1/auth",
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