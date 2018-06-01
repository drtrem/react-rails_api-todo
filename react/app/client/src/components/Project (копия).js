import React from 'react';
import Task from './Task';
const Project = ({project, tasks, onRemoveProject=f=>f, editingProject=f=>f}) =>
    <div className="single-project" key={project.id}>
        <h4>{project.id}</h4>
        <p>{project.name}</p>
        <button onClick={() => onRemoveProject(project.id)}>Erase</button>
        <button onClick={() => editingProject(project.id)}>Edit</button>
        <hr/>
        {tasks.map( task => {
          console.log(project.id);
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

import React from 'react';
import Task from './Task';
const Project = ({project, tasks, onRemoveProject=f=>f, editingProject=f=>f}) =>
      <div key={project.id}>
        <div className="col-lg-offset-2 col-lg-8 task">
          <img src="img/icon-top.png" alt=""/>
          <span>{project.id} + ' ' + {project.name}</span>

          <a onClick={() => onRemoveProject(project.id)} className="delete-button-top" href="#"><img src="img/delete-top.png" alt=""/></a>
          <a href="#"><img src="img/edit-top.png" alt=""/></a>
        </div>
        <div className="col-lg-offset-2 col-lg-8 add-task">
          <form className="inputtop" autoComplete="off">
            <img src="img/plus.png" alt=""/>
            <input className={id} type="text" name="new-task" placeholder="Add a new item..." />
            <button id={id} className="add-task-btn">Add Task</button>
          </form>
        </div>
      </div>


        <button onClick={() => onRemoveProject(project.id)}>Erase</button>
        <button onClick={() => editingProject(project.id)}>Edit</button>
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
   
export default Project;