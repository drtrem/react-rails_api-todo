import React from 'react';
    
const Task = ({task, onRemoveTask=f=>f, editingTask=f=>f, moveTask=f=>f, onHandleInputChange=f=>f}) =>
  <div className="single-task" key={task.id}>
    <div className="col-lg-offset-2 col-lg-8 check-task">
      <form autoComplete="off">
        <input
          type="checkbox"
          checked={task.status}
          onChange={() => onHandleInputChange(task.id, task.name, (task.status ? false : true), task.project_id )}>
        </input>
        <span>{task.name}</span>
        <a onClick={() => onRemoveTask(task.id)} className="delete-button"><img src="img/delete.png" alt=""/></a>
        <a onClick={() => editingTask(task.id)}><img src="img/edit.png" alt=""/></a>
        <a onClick={() => moveTask(task.id)}><img src="img/move.png" alt=""/></a>
      </form>
    </div>
  </div>

export default Task; 
