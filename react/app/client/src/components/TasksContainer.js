import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import NewProjectForm from './NewProjectForm';
import EditProjectForm from './EditProjectForm';
import Task from './Task';

class TasksContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: []
        }
        this.removeProject = this.removeProject.bind(this)
        this.editingProject = this.editingProject.bind(this)
        this.editProject = this.editProject.bind(this)
    }
    componentDidMount() {
        axios.get('/api/v1/tasks.json')
        .then((response) => {
            console.log(response)
            this.setState({
                tasks: response.data
            });
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
            <div className="tasks-container">
                {this.state.tasks.map( task => {
                  if (task.project_id === this.props.id) {
                    return (<Task
                              task={task} 
                              key={task.id}
                              onRemoveTask={this.onRemoveTask}
                              editingTask={this.editingTask} 
                              moveTask={this.moveTask}
                    />);
                  }
                })}
            </div>
        )
    }
}

export default TasksContainer;