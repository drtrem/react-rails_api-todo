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
        <form onSubmit={submit}>
            <input  ref={input => name = input}
                    type="text"
                    placeholder="Name..." required />
            <button>Add Project</button>
        </form>
    )
}

export default NewProjectForm;