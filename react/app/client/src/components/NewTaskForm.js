import React from 'react';

const NewProjectForm = ({onNewProject = f => f}) => {
    let name, excerpt
    const submit = e => {
        e.preventDefault()
        onNewProject(_name.value, _excerpt.value)
        name.value = ''
        excerpt.value = ''
        title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => name = input}
                    type="text"
                    placeholder="Name..." required />
            <input  ref={input => excerpt = input}
                    type="text"
                    placeholder="Excerpt..." required />
            <button>Add Project</button>
        </form>
    )
}

export default NewProjectForm;