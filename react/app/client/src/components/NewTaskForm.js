import React from 'react';

const NewTaskForm = ({id, onNewTask = f => f}) => {
  let name_task
  const submit_task = e => {
    e.preventDefault()
    onNewTask(id, name_task.value)
    name_task.value = ''
    name_task.focus()
  }

  return (
    <div className="col-lg-offset-2 col-lg-8 add-task">
      <form onSubmit={submit_task} className="inputtop" autoComplete="off">
        <img src="img/plus.png" alt=""/>
        <input className="input-task" ref={input => name_task = input} type="text" name="new-task" placeholder="Add a new item..." required />
        <button className="input-task-button add-task-btn">Add Task</button>
      </form>
    </div>
  )
}

export default NewTaskForm;
