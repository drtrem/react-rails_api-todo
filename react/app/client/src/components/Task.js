import React, { Component } from 'react';
import EditTaskForm from './EditTaskForm';
import * as taskApi from '../API/taskApi';
 
class Task extends Component {
  render() {
    return (
      this.props.tasks.map( task => {
        if ( (this.props.editingTaskId === task.id) && (this.props.id === task.project_id) ) {
          return (<EditTaskForm 
            task={task} 
            key={task.id} 
            editTask={taskApi.editTask}/>)
        } else {
            if (task.project_id === this.props.id) {
              return (  
                <div className="single-task" key={task.id}>
                  <div className="col-lg-offset-2 col-lg-8 check-task">
                    <form autoComplete="off">
                      <input
                        className="checkbox"
                        type="checkbox"
                        checked={task.status}
                        onChange={() => taskApi.handleInputChange(task.id, task.name, (task.status ? false : true), task.project_id )}>
                      </input>
                      <span>{task.name}</span>
                      <a onClick={() => taskApi.removeTask(task.id)} className="delete-button"><img src="img/delete.png" alt=""/></a>
                      <a onClick={() => taskApi.editingTask(task.id)} className="edit-button"><img src="img/edit.png" alt=""/></a>
                      <a><img src="img/move.png" alt=""/></a>
                    </form>
                  </div>
                </div>);
            }
          }
      })
    )
  }
}

export default Task;
