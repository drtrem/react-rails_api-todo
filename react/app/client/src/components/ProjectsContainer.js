import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Project from './Project';
import NewProjectForm from './NewProjectForm';
import { Projects } from '../actions/projectActions';
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
    projects: store.projectState.projects
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
