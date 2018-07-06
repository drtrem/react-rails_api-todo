import React, { Component } from 'react';
import TasksContainer from './TasksContainer';
import EditProjectForm from './EditProjectForm';

class Project extends Component {
  render() {
    return (
      this.props.projects.map( project => {
        if ( this.props.editingProjectId === project.id ) {
          return (<EditProjectForm 
            project={project} 
            key={project.id} 
            editProject={this.props.editProject}/>
          )
        } else {
          return (
            <div key={project.id}>
              <div className="col-lg-offset-2 col-lg-8 task">
                <img src="img/icon-top.png" alt=""/>
                <span>{project.id} {project.name}</span>
                <a onClick={() => this.props.removeProject(project.id)} className="delete-button-top"><img src="img/delete-top.png" alt=""/></a>
                <a onClick={() => this.props.editingProject(project.id)}><img src="img/edit-top.png" alt=""/></a>
              </div>
              <TasksContainer id={project.id} />
            </div>
          )
        }
      })
    )
  }
}

export default Project;
