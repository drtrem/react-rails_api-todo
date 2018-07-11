import { combineReducers } from 'redux';

// Reducers
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

// Combine Reducers
var reducers = combineReducers({
  projectState: projectReducer,
  taskState: taskReducer,
});

export default reducers;
