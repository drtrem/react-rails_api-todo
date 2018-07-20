import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../views/Task';
import NewTaskForm from '../NewTaskForm';
import * as taskApi from '../../API/taskApi';

class TasksContainer extends Component {

  render() {
    return (
      <div className="tasks-container">
        <NewTaskForm onNewTask={taskApi.addNewTask} id={this.props.id} />
        <Task
          id={this.props.id}
          tasks={this.props.tasks}
          editingTaskId={this.props.editingTaskId} />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.taskState.tasks,
    editingTaskId: store.taskState.editingTaskId
  };
};

export default connect(mapStateToProps)(TasksContainer);