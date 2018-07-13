import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  projects: [],
  editingProjectId: null
};

const projectReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PROJECTS_SUCCESS:
      return Object.assign({}, state, { projects: action.projects } );

    case types.SET_PROJECT_SUCCESS:
      return {...state, projects: [ ...state.projects, action.projectName ]}

    case types.REMOVE_PROJECT_SUCCESS:
      const newProjects = _.filter(state.projects, project => project.id !== action.projectId);
      return Object.assign({}, state, { projects: newProjects });

    case types.EDITING_PROJECT_SUCCESS:
      return Object.assign({}, state, { editingProjectId: action.projectId } );

    case types.EDIT_PROJECT_SUCCESS:

      const updatedProjects = state.projects.map(project => {
        if(project.id === action.projectId){
          return { ...project, name: action.projectName }
        }
        return project
      })
      return Object.assign({}, state, { projects: updatedProjects });

    default: return state;
  }
}

export default projectReducer;
