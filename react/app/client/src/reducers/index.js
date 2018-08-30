import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth'

// Reducers
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

// Combine Reducers
var reducers = combineReducers({
  projectState: projectReducer,
  taskState: taskReducer,
  reduxTokenAuth: reduxTokenAuthReducer,
});

export default reducers;
