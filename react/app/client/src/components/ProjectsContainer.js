import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import NewProjectForm from './NewProjectForm';

class ProjectsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [],
      tasks: [],
      editingProjectId: null
    }
    this.addNewProject = this.addNewProject.bind(this)
    this.removeProject = this.removeProject.bind(this)
    this.editingProject = this.editingProject.bind(this)
    this.editProject = this.editProject.bind(this)
  }
  componentDidMount() {
    axios.get('/api/v1/projects.json')
    .then((response) => {
      console.log(response)
      this.setState({
        projects: response.data
      });
    })
    .catch((error) => {console.log(error)})
  }
  addNewProject(name) {
    axios.post( '/api/v1/projects', { project: {name} })
    .then((response) => {
      console.log(response)
      const projects = [ ...this.state.projects, response.data ]
      this.setState({projects})
    })
    .catch((error) => {console.log(error)})
  }
  removeProject(id) {
    axios.delete( '/api/v1/projects/' + id )
    .then((response) => {
      const projects = this.state.projects.filter(
        (project) => project.id !== id
      )
      this.setState({projects})
    })
    .catch((error) => {console.log(error)})
  }
  editingProject(id) {
    this.setState({
      
    })
  }
  editProject(id, name) {
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
      editingProjectId: null}))
    })
    .catch((error) => {console.log(error)})
  }

  render() {
    return (
      <div className="projects-container">
        <Project 
          projects={this.state.projects} 
          removeProject={this.removeProject} 
          editProject={this.editProject} 
          editingProject={this.editingProject} 
          editingProjectId={this.editingProjectId}/>
        <NewProjectForm onNewProject={this.addNewProject} />
      </div>
    )
  }
}

export default ProjectsContainer;
