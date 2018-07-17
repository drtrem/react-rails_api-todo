import React from 'react';

const NewProjectForm = ({onNewProject = f => f}) => {
  let name
  const submit = e => {
    e.preventDefault()
    onNewProject(name.value)
    name.value = ''
    name.focus()
  }

  return (
    <div className="col-lg-offset-2 col-lg-8">
      <form onSubmit={submit}>
        <input className="input-project center-block"
          ref={input => name = input}
          type="text"
          placeholder="Add project..." required />
        <button className="add center-block add-project">Add Project</button>
      </form>
    </div>
  )
}

export default NewProjectForm;