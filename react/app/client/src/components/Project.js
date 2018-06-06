import React from 'react';
import TasksContainer from './TasksContainer';
import NewTaskForm from './NewTaskForm';

const Project = ({project, tasks, onRemoveProject=f=>f, editingProject=f=>f, addNewTask=f=>f}) =>
      <div key={project.id}>
        <div className="col-lg-offset-2 col-lg-8 task">
          <img src="img/icon-top.png" alt=""/>
          <span>{project.id} {project.name}</span>
          <a onClick={() => onRemoveProject(project.id)} className="delete-button-top"><img src="img/delete-top.png" alt=""/></a>
          <a onClick={() => editingProject(project.id)}><img src="img/edit-top.png" alt=""/></a>
        </div>
        <NewTaskForm onNewTask={addNewTask} project={project} />
        <hr/>
        <TasksContainer id={project.id} />
      </div>

export default Project;