import { combineReducers } from 'redux';

// Reducers
import projectReducer from './projectReducer';

// Combine Reducers
var reducers = combineReducers({
  projectState: projectReducer
});

export default reducers;
