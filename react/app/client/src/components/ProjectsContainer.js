import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project';
import NewProjectForm from './NewProjectForm';
import * as projectApi from '../API/projectApi';

class ProjectsContainer extends Component {
  componentDidMount() {
    projectApi.getProjects();
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
 