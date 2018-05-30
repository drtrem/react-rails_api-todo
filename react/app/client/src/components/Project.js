import React from 'react';
const Project = ({project, onRemoveProject=f=>f, editingProject=f=>f}) =>
    <div className="single-project" key={project.id}>
        <h4>{project.id}</h4>
        <p>{project.name}</p>
        <button onClick={() => onRemoveProject(project.id)}>Erase</button>
        <button onClick={() => editingProject(project.id)}>Edit</button>
        <hr/>
    </div>
export default Project;