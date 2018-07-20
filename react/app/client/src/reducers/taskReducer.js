import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  tasks: [],
  editingTaskId: null
};

const taskReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_TASKS_SUCCESS:
      return Object.assign({}, state, { tasks: action.tasks } );

    case types.SET_TASK_SUCCESS:
      return {...state, tasks: [ ...state.tasks, action.task ]}

    case types.REMOVE_TASK_SUCCESS:
      const newTasks = _.filter(state.tasks, task => task.id !== action.taskId);
      return Object.assign({}, state, { tasks: newTasks });

    case types.EDIT_TASK_SUCCESS:
      const updatedTasks = state.tasks.map(task => {
        if(task.id === action.task.id){
          return action.task
        }
        return task
      })
      return Object.assign({}, state, { tasks: updatedTasks });

    case types.EDITING_TASK_SUCCESS:
      return Object.assign({}, state, { editingTaskId: action.taskId } );

    default: return state;
  }
}

export default taskReducer;
  