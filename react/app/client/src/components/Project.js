import React from 'react';
import Task from './Task';
const Project = ({project, tasks, onRemoveProject=f=>f, editingProject=f=>f}) =>
      <div key={project.id}>
        <div className="col-lg-offset-2 col-lg-8 task">
          <img src="img/icon-top.png" alt=""/>
          <span>{project.id} {project.name}</span>
          <a onClick={() => onRemoveProject(project.id)} className="delete-button-top"><img src="img/delete-top.png" alt=""/></a>
          <a onClick={() => editingProject(project.id)}><img src="img/edit-top.png" alt=""/></a>
        </div>
        <div className="col-lg-offset-2 col-lg-8 add-task">
          <form className="inputtop" autoComplete="off">
            <img src="img/plus.png" alt=""/>
            <input type="text" name="new-task" placeholder="Add a new item..." />
            <button className="add-task-btn">Add Task</button>
          </form>
        </div>
        <hr/>
        {tasks.map( task => {
          if (task.project_id === project.id) {
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
export default Project;