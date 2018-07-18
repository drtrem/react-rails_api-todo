import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../views/Project';
import NewProjectForm from '../NewProjectForm';
import * as projectApi from '../../API/projectApi';
import * as taskApi from '../../API/taskApi';

class ProjectsContainer extends Component {
  componentDidMount() {
    projectApi.getProjects();
    taskApi.getTasks();
  }

  render() {
    return (
      <div className="projects-container">
        <Project 
          projects={this.props.projects}
          oneditingProjectId={this.props.editingProjectId}
          removeProject={projectApi.removeProject} 
          editProject={projectApi.editProject} 
          editingProject={projectApi.editingProject} />
        <NewProjectForm onNewProject={projectApi.addNewProject} />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    projects: store.projectState.projects,
    editingProjectId: store.projectState.editingProjectId
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
 