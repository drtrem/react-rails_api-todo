import * as types from '../actions/actionTypes';

export function getProjectsSuccess(projects) {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    projects
  };
}

export function setProjectSuccess(projectName) {
  return {
    type: types.SET_PROJECT_SUCCESS,
    projectName
  };
}

export function removeProjectSuccess(projectId) {
  return {
    type: types.REMOVE_PROJECT_SUCCESS,
    projectId
  };
}

export function editingProjectSuccess(projectId) {
  return {
    type: types.EDITING_PROJECT_SUCCESS,
    projectId
  };
}


export function editProjectSuccess(projectId, projectName) {
  return {
    type: types.EDIT_PROJECT_SUCCESS,
    projectId,
    projectName
  };
}
