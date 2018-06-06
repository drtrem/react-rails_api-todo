import React from 'react';

const NewTaskForm = ({project, onNewTask = f => f}) => {
    let name_task
    const submit_task = e => {
        e.preventDefault()
        onNewTask(project.id, name_task.value)
        name_task.value = ''
        name_task.focus()
    }

    return (
        <div className="col-lg-offset-2 col-lg-8 add-task">
          <form onSubmit={submit_task} className="inputtop" autoComplete="off">
            <img src="img/plus.png" alt=""/>
            <input ref={input => name_task = input} type="text" name="new-task" placeholder="Add a new item..." />
            <button className="add-task-btn">Add Task</button>
          </form>
        </div>
    )
}

export default NewTaskForm;
