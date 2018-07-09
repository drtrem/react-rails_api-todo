import * as types from '../actions/actionTypes';

const initialState = {
  projects: [],
  tasks: [],
  editingProjectId: null
};

const projectReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PROJECTS_SUCCESS:
      return Object.assign({}, state, { projects: action.projects });

    case types.REMOVE_PROJECT_SUCCESS:

      // Use lodash to create a new user array without the user we want to remove
      //const newUsers = _.filter(state.users, user => user.id != action.userId);
      //return Object.assign({}, state, { users: newUsers });

    case types.SET_PROJECT_SUCCESS:
      //return Object.assign({}, state, { userProfile: action.userProfile });

  }

  return state;

}

export default projectReducer;
