import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import NewProjectForm from './NewProjectForm';
import EditProjectForm from './EditProjectForm';

class ProjectsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: [],
            tasks: [],
            editingListId: null
        }
        this.addNewProject = this.addNewProject.bind(this)
        this.removeProject = this.removeProject.bind(this)
        this.editingProject = this.editingProject.bind(this)
        this.editProject = this.editProject.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
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
    addNewTask(project_id, name) {
        axios.post( '/api/v1/tasks', { task: {project_id, name} })
        .then((response) => {
            console.log('work')
            console.log(response)
            console.log(this.state.tasks)
            const tasks = [ ...this.state.tasks, response.data ]
            console.log(this.state.tasks)
            this.setState({tasks})
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
            editingProjectId: id
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
                editingProjectId: null
            }))
        })
        .catch((error) => {console.log(error)})
    }
    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map( project => {
                    if ( this.state.editingProjectId === project.id ) {
                        return (<EditProjectForm 
                                    project={project} 
                                    key={project.id} 
                                    editProject={this.editProject} 
                        />)
                    } else {
                        return (<Project 
                                    project={project}
                                    key={project.id} 
                                    onRemoveProject={this.removeProject}
                                    editingProject={this.editingProject}
                                    addNewTask={this.addNewTask} 
                        />)
                    }
                })}
                <NewProjectForm onNewProject={this.addNewProject} />
            </div>
        )
    }
}

export default ProjectsContainer;