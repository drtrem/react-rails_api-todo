import * as types from '../actions/actionTypes';

export function getTasksSuccess(tasks) {
  return {
    type: types.GET_TASKS_SUCCESS,
    tasks
  };
}

export function setTaskSuccess(task) {
  return {
    type: types.SET_TASK_SUCCESS,
    task
  };
}

export function removeTaskSuccess(taskId) {
  return {
    type: types.REMOVE_TASK_SUCCESS,
    taskId
  };
}

export function editingTaskSuccess(taskId) {
  return {
    type: types.EDITING_TASK_SUCCESS,
    taskId
  };
}

export function editTaskSuccess(task) {
  return {
    type: types.EDIT_TASK_SUCCESS,
    task
  };
}

