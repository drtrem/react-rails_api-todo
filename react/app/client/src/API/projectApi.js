import axios from 'axios';
import store from '../index';
import { getProjectsSuccess, setProjectSuccess, removeProjectSuccess, editProjectSuccess } from '../actions/projectActions';

export function getProjects() {
  return axios.get('/api/v1/projects.json')
    .then(response => {
      store.dispatch(getProjectsSuccess(response.data));
      return response;
    });
}
export function addNewProject(name) {
    axios.post( '/api/v1/projects', { project: {name} })
    .then((response) => {
      console.log(response)
      const projects = [ ...this.state.projects, response.data ]
      this.setState({projects})
    })
    .catch((error) => {console.log(error)})
}
export function removeProject(id) {
    axios.delete( '/api/v1/projects/' + id )
    .then((response) => {
      const projects = this.state.projects.filter(
        (project) => project.id !== id
      )
      this.setState({projects})
    })
    .catch((error) => {console.log(error)})
}
export function editingProject(id) {
    this.setState({
      
    })
}
export function editProject(id, name) {
    axios.put( '/api/v1/projects/' + id, { project: {name} })
    .then((response) => {
      console.log(response);
      const projects = this.state.projects;
      projects.forEach ( (project,i) => {
        if ( project.id === id ) {
          projects[i] = {id, name};
        }
      })
    this.setState(() => ({
      projects, 
      //store.projectState.editingProjectId: null
    }))
    })
    .catch((error) => {console.log(error)})
}