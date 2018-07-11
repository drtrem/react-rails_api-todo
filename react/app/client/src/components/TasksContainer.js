import React, { Component } from 'react';
import axios from 'axios';
import EditTaskForm from './EditTaskForm';
import Task from './Task';
import NewTaskForm from './NewTaskForm';
import * as taskApi from '../API/taskApi';

class TasksContainer extends Component {

  componentDidMount() {
    taskApi.getTasks(); 
  }

  render() {
    return (
      <div className="tasks-container">
        <NewTaskForm onNewTask={taskApi.addNewTask} id={this.props.id} />
        {this.state.tasks.map( task => {
          if ( this.state.editingTaskId === task.id ) {
            return (<EditTaskForm 
              task={task} 
              key={task.id} 
              editTask={this.editTask}/>)
          } else {
              if (task.project_id === this.props.id) {
                return (<Task
                  task={task} 
                  key={task.id}
                  onRemoveTask={taskApi.removeTask}
                  editingTask={taskApi.editingTask} 
                  //moveTask={taskApi.moveTask}
                  onHandleInputChange={taskApi.handleInputChange}/>);
              }
            }
        })}
      </div>
    )
  }
}

export default TasksContainer;