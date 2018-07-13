import axios from 'axios';
import store from '../index';
import { getTasksSuccess, setTaskSuccess, removeTaskSuccess, editingTaskSuccess, editTaskSuccess, editTaskStatusSuccess } from '../actions/taskActions';

export function getTasks() {
  return axios.get('/api/v1/tasks.json')
    .then(response => {
      store.dispatch(getTasksSuccess(response.data));
    })
    .catch((error) => {console.log(error)})
}
export function addNewTask(project_id, name, status) {
  axios.post( '/api/v1/tasks', { task: {project_id, name, status} })
  .then(response => {
    store.dispatch(setTaskSuccess(response.data));
  })
  .catch((error) => {console.log(error)})
}
export function removeTask(id) {
  axios.delete( '/api/v1/tasks/' + id )
  .then(response => {
    store.dispatch(removeTaskSuccess(id));
  })
  .catch((error) => {console.log(error)})
}
export function editingTask(id) {
  store.dispatch(editingTaskSuccess(id));
}
export function editTask(id, name, status, project_id) { 
    axios.put( '/api/v1/tasks/' + id, { task: {name} })
    .then((response) => {
      store.dispatch(editTaskSuccess(response.data));
      store.dispatch(editingTaskSuccess(null));
    })
    .catch((error) => {console.log(error)})
} 
export function handleInputChange(id, name, status, project_id) {
    axios.put( '/api/v1/tasks/' + id, { task: {status} })
    .then((response) => {
      store.dispatch(editTaskStatusSuccess(response.data));
    })
    .catch((error) => {console.log(error)})
} 
